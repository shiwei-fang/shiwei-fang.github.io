---
layout: project
title: SuperRF
heading: 'SuperRF: Enhanced 3D RF Representation Using Stationary Low-Cost mmWave Radar'
nav: research
bibtex: |
  @inproceedings{fang2020superrf,
      title={SuperRF: Enhanced 3D RF Representation Using Stationary Low-Cost mmWave Radar},
      author={Fang, Shiwei and Nirjon, Shahriar},
      booktitle={Proceedings of the 2020 International Conference on Embedded Wireless Systems and Networks},
      pages={120--131},
      isbn={9780994988645},
      year={2020}
  }
description: 'SuperRF: enhanced 3D RF representation using stationary low-cost mmWave radar. Project page, dataset and citation (EWSN 2020).'
---

This is the website for the research project SuperRF, the resulting paper "SuperRF: Enhanced 3D RF Representation Using Stationary Low-Cost mmWave Radar" appeared in EWSN 2020.

---

### Motivation & Goal

Advancements in 3D scene sensing have fueled the adoption of such technology in numerous applications such as robotics, VR, and AR. However, the current solutions mostly involve vision-based systems such as camera, depth camera, and LIDAR which have a major limitation as their sensing capability can be severely decreased by environmental elements such as fog, smoke, bad lighting, and occlusion. RF sensing techniques such as WiFi and mmWave radar can easily see through those conditions but lack the resolution. To address this issue, we use deep learning to enhance the resolution of low-cost off-the-shelf mmWave radar.

---

### Proposed Solution

For this project, we propose a two-step super-resolution framework in which the low-resolution mmWave radar input is enhanced by neural network and then further enhanced by compressed sensing techniques. The intuition behind this framework is that a neural network can help build a model of how the low-resolution radar input is correlated to the high-resolution ones. However, a neural network-based solution can produce blurry outputs, which is where the second-stage compressed sensing-based method comes in to further improve the results. For more detail, please refer to our paper: "SuperRF: Enhanced 3D RF Representation Using Stationary Low-Cost mmWave Radar".

---

### Dataset Collection

We collected our own dataset using TI mmWave AWR 1443 EVM radar and Kinect V1 depth camera. The setup is shown below:

{% include figure.html src="/projects/pics/superrf-setup.JPG" width="1634" height="1400" alt="SuperRF data collection setup: (a) radar and Kinect depth camera mounted on a vertical linear slider, (b) close-up of the Kinect and radar, (c) TI AWR1443 mmWave evaluation board" %}

During our data collection, we use our custom linear slider to move the radar upward by ½λ where λ is the wavelength of the mmWave radar. The radar takes one snapshot of the scene with doppler bin 0 (static) then the slider moves the radar and takes another snapshot. The consecutive snapshots can be combined to create Synthetic Aperture Radar (SAR) to increase the resolution in elevation direction.

---

### Dataset Release

We release our collected dataset to the community, more information can be found on the webpage:\\
**Bitbucket:** &nbsp;&nbsp;[https://bitbucket.org/embedded_intelligence/superrf_dataset/src/master/](https://bitbucket.org/embedded_intelligence/superrf_dataset/src/master/)

---

### Citation

If you use our dataset or find our paper useful, please cite our paper:

{% include citation.html %}
