---
layout: post
title: 2x HDMI StarTech 109B-USBC Adapter
excerpt: "Adapter that let's you do multi-monitor : 2x HDMI - 4K 60Hz - 100W Power Delivery Pass-Through"
category: components
tags: ['Windows', 'Linux', 'Fedora', 'MacOS']
image: /assets/posts/startech_109b_usbc_hdmi/2019-08-06-tests-links.jpg
---

## Purpose of This Page

Are you looking to purchase an adapter that adds two more HDMI outputs to your USB-C computer?  
I might have just the right thing for you.

## Reference

* The Adapter from StarTech : [USB-C to Dual-HDMI Adapter, 4K 60Hz, PD - USB-C Display Adapters - Display & Video Adapters - StarTech.com](https://www.startech.com/en-us/display-video-adapters/109b-usbc-hdmi)
* The [data sheet](https://media.startech.com/cms/pdfs/109b-usbc-hdmi_datasheet.pdf) tells us that the Chipset ID is DisplayLink - DL6950

## My external monitors

No 4K monitor but I have :

* ASUS VG27B : 27" monitor capable of reaching 144 hz with a resolution of 2560x1440 px
* IIyama ProLite E2480HS 24" monitor capable of reaching 60Hz with a native resolution of 1920x1080 px

**I was always able to achieve native resolution and maximum refresh rate.**

## Windows 10

It works out of the box on a system where:

* I am not an administrator.
* I cannot install any drivers.

So... That's pretty cool!

## Fedora 39 - kernel 6.7

* Tested on a [Dell XPS 13 9350](https://dl.dell.com/manuals/all-products/esuprt_laptop/esuprt_xps_laptop/xps-13-9350-laptop_Reference%20Guide_en-us.pdf)
* This model if from 2015
* It has a "Thunderbolt 3 (USB Type‑C) port" which "supports USB 3.1 Gen 2, DisplayPort 1.2 , Thunderbolt 3"
* I am running Fedora 39  
  At this time of writing the kernel is : 6.7.3-200.fc39.x86_64

Some actions a required

### Start install

You must install the Display link driver

{% highlight Bash %}
sudo dnf copr enable crashdummy/Displaylink 
sudo dnf update
sudo dnf install displaylink -y
{% endhighlight %}

Check the status of the Display Link driver using this command :
{% highlight Bash %}
systemctl status displaylink-driver.service
{% endhighlight %}

It should not display an error. But it will as...  
*The driver cannot start when you are in "SecureBoot" mode*

### Secure boot ?

Are you running Fedora on a "Secure Boot" computer ?  
Run this command to know :
{% highlight Bash %}
mokutil --sb-state
{% endhighlight %}
It will display : 
{% highlight Bash %}
SecureBoot enabled
{% endhighlight %}

If you decide to disable "Secure Boot" mode, you have to access the BIOS settings upon computer restart to disable "Secure Boot".
The method to do this depends on your computer and BIOS.
I would not recommend it (for security reasons).
Please follow the next steps to sign the driver so it can run under Secure Boot mode.

### Sign the module

Create a "Machine Owner Key" and use it to sign everything needed

{% highlight Bash %}
# Create the key
openssl req -new -x509 -newkey rsa:2048 -keyout MOK.priv -outform DER -out MOK.der -nodes -days 36500 -subj "/CN=Displaylink/"
# Register the MOK with secure boot
# You must provide a password needed when rebooting
sudo mokutil --import MOK.der
{% endhighlight %}

Then reboot your Fedora host and follow the instructions to enroll the key.

{% highlight Bash %}
sudo modinfo -n evdi /lib/modules/$(uname -r)/extra/evdi.ko.xz
sudo unxz $(modinfo -n evdi)
sudo /usr/src/kernels/$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der /lib/modules/$(uname -r)/extra/evdi.ko
sudo xz -f /lib/modules/$(uname -r)/extra/evdi.ko
{% endhighlight %}

Et voilà !  
But don't forget that : **This must be done for every kernel upgrade**

### References

My procedure is just the necessary commands taken from :

* [crashdummy/Displaylink Copr](https://copr.fedorainfracloud.org/coprs/crashdummy/Displaylink/)
* [jysky/DisplayLink Copr](https://copr.fedorainfracloud.org/coprs/jysky/DisplayLink/)

## Ubuntu

Not tested as I am happy with Fedora.  
It should work StarTech provides an Ubuntu Driver

##  Macbook PRO M3 running macOS 14.3.1 Sonoma

Works like a charm using the provided drivers [109B-USBC-HDMI](https://www.startech.com/en-us/display-video-adapters/109b-usbc-hdmi)
