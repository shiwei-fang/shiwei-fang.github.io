/* Site script: the light/dark theme.
 *
 * Loaded in <head> (before the stylesheets) so the theme is applied before
 * anything is drawn, which avoids a flash of the wrong colors.
 *
 * Starting theme: the visitor's saved choice, otherwise their system setting.
 * The choice is saved in the browser's localStorage under the key "theme"
 * when they press the switch, and is never sent anywhere. Until they press
 * it, the site also follows changes to their system setting.
 */
(function () {
    var root = document.documentElement;
    var KEY = "theme";

    function saved() {
        try {
            var t = localStorage.getItem(KEY);
            return t === "light" || t === "dark" ? t : null;
        } catch (e) {
            return null; // storage blocked (some privacy settings): just don't remember
        }
    }
    function systemTheme() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function apply(theme) {
        root.setAttribute("data-bs-theme", theme);
        var button = document.querySelector(".theme-toggle");
        if (button) {
            var label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
            button.setAttribute("aria-label", label);
            button.setAttribute("title", label);
        }
    }

    // 1. Before the page is drawn.
    root.classList.add("js"); // lets the CSS show script-only controls
    apply(saved() || systemTheme());

    // 2. Once the page is ready: the switch button.
    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector(".theme-toggle");
        if (!button) return;
        apply(root.getAttribute("data-bs-theme")); // set the button's label
        button.addEventListener("click", function () {
            var next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
            try { localStorage.setItem(KEY, next); } catch (e) {}
            apply(next);
        });
    });

    // 3. Follow the system setting until the visitor makes a choice.
    if (window.matchMedia) {
        var query = window.matchMedia("(prefers-color-scheme: dark)");
        var follow = function () { if (!saved()) apply(systemTheme()); };
        if (query.addEventListener) query.addEventListener("change", follow);
        else if (query.addListener) query.addListener(follow);
    }
})();
