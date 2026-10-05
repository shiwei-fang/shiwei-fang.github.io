---
layout: project
title: EyeFi
heading: 'EyeFi: Fast Human Identification Through Vision and WiFi-based Trajectory Matching'
nav: research
bibtex: |
  @inproceedings{fang2020eyefi,
      title={EyeFi: Fast Human Identification Through Vision and WiFi-based Trajectory Matching},
      author={Fang, Shiwei and Islam, Tamzeed and Munir, Sirajum and Nirjon, Shahriar},
      booktitle={2020 16th International Conference on Distributed Computing in Sensor Systems (DCOSS)},
      pages={59--68},
      year={2020},
      organization={IEEE}
  }
description: 'EyeFi: fast human identification by matching camera and WiFi-based trajectories. Project page, dataset and citation (DCOSS 2020).'
---

This is the website for the research project EyeFi, the resulting paper "EyeFi: Fast Human Identification Through Vision and WiFi-based Trajectory Matching" appeared in DCOSS 2020.

---

### Motivation & Goal

Human sensing, motion trajectory estimation, and identification have a wide range of applications, including in retail stores, surveillance, public safety, public address, and in access control. For example, in retail stores, it is useful to capture customer behavior to determine an optimal layout for product placement, detecting re-appearing shoppers after weeks to track shopper retention rate, separating employees from shoppers to generate an accurate heatmap of motion pattern of (only) shoppers. For surveillance, it is useful to identify and track a limited set of people from a crowd, e.g., tracking undercover police agents from a group of people to ensure their safety. Once a class of people is identified, that can be leveraged for public address based on additional contexts. For example, when an active shooter in a building has been identified through a security camera, targeted and customized messages can be sent to different groups of people in different parts of the building through accurate identification to help to find safe escape routes — instead of sending a generic SMS to everyone, possibly including the shooter. We want to develop a system that can provide long-term re-identification and does not require privacy intrusion techniques such as facial recognition.

---

### Proposed Solution

We propose to fuse two powerful sensing modalities — WiFi and camera — in order to overcome the aforementioned limitations of the state-of-the-art solutions. We call our proposed solution EyeFi. EyeFi does not require facial recognition, provides long-term re-identification, does not require deployment and maintenance of multiple WiFi units, and has the potential to provide such intelligent capabilities on a standalone device.

EyeFi uses the on-board camera to detect, track, and estimate the motion trajectories of the people in its field of view. Simultaneously, using the on-board WiFi chipset, EyeFi overhears WiFi packets from nearby smartphones and extracts the Channel State Information (CSI) data from the WiFi packets. The CSI information is used to estimate the Angle of Arrival (AoA) of the smartphone from the EyeFi unit. Compared to existing WiFi-based AoA estimation techniques such as SpotFi [1], EyeFi uses a smartphone in motion as a transmitter (not a stationary desktop computer), uses a low sampling rate (around 23 packets per second), and uses a novel teacher-student based visually guided neural network to speed up the AoA estimation by over 3,800 times. For each person (i.e., smartphone) generating the WiFi traffic, a sequence of AoAs is estimated to capture the motion trajectory of the individual. Then EyeFi performs cross-modal trajectory matching to determine the identity of the individuals.

As most people use smartphones and the same smartphone is usually used for an extended period of time, EyeFi can identify the same person across time using the unique MAC address associated with each device. As the MAC address does not reveal the true identity of the person, a higher level of privacy is also enabled. For more detail, please refer to our paper: "EyeFi: Fast Human Identification Through Vision and WiFi-based Trajectory Matching".

---

### Dataset Collection

For this project, we collected our own WiFi CSI dataset with Google Pixel 2 XL, Intel NUC with Intel 5300 WiFi card and Bosch Flexidome IP Panoramic 7000 camera as shown below:

{% include figure.html src="/projects/pics/eyefi-devices.jpg" width="768" height="325" alt="Data collection hardware: Google Pixel 2 XL phone, Intel NUC with Intel 5300 WiFi card and three antennas, and Bosch Flexidome IP Panoramic 7000 camera" %}

In our experiments, we used Intel 5300 WiFi Network Interface Card (NIC) installed in an Intel NUC and Linux CSI tools [2] to extract the WiFi CSI packets. The (x,y) coordinates of the subjects are collected from Bosch Flexidome IP Panoramic 7000 panoramic camera mounted on the ceiling and Angle of Arrival (AoA) derived from the (x,y) coordinates. Both the WiFi card and camera are located at the same origin coordinates but at different heights; the camera is located around 2.85m from the ground and WiFi antennas are around 1.12m above the ground.

The data collection environment consists of two areas (shown below), the first one is a rectangular space measuring 11.8m x 8.74m, and the second space is an irregularly shaped kitchen area with maximum distances of 19.74m and 14.24m between two walls. The kitchen also has numerous obstacles and different materials that pose different RF reflection characteristics, including strong reflectors such as metal refrigerators and dishwashers.

{% include figure.html src="/projects/pics/eyefi-areas.jpg" width="697" height="358" alt="Overhead fisheye camera views of the two data collection areas: (a) lab area, (b) kitchen area" %}

To collect the WiFi data, we used a Google Pixel 2 XL smartphone as an access point and connected the Intel 5300 NIC to it for WiFi communication. The transmission rate is about 20-25 packets per second. The same WiFi card and phone are used in both lab and kitchen area.

---

### Dataset Release

We release our collected dataset to the community, more information can be found on the webpage:\\
**Zenodo:** &nbsp;&nbsp;[https://zenodo.org/record/3882104](https://zenodo.org/record/3882104)

---

### Citation

If you use our dataset or find our paper useful, please cite our paper:

{% include citation.html %}

---

### References

`1. Kotaru, Manikanta, et al. "Spotfi: Decimeter level localization using wifi." Proceedings of the 2015 ACM Conference on Special Interest Group on Data Communication. 2015.`\\
`2. Halperin, Daniel, et al. "Tool release: Gathering 802.11 n traces with channel state information." ACM SIGCOMM Computer Communication Review 41.1 (2011): 53-53.`
