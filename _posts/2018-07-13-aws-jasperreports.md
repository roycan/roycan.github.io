---
layout: post
title: "Jasper Server on AWS Attempt"	
remarks: "series post"
categories: Skills
tags: 
- AWS
- jasperserver
---

I was supposed to take a mock exam for AWS CPE today with Edgar. He asked to have it move to next week. That's fine with me because I'm still listening to the Udemy videos anyway and I expect to finish that part by this weekend. 

Anyway, I want to get my feet wet with Amazon Web Services, so I've decided to go get Jasper Reports running on it. Let's see this adventure play out. 

## Step 1: Register With Amazon Web Services (AWS)

By all means, this should be the official UP email. I would have thought of using dcs email, but that's probably not a good idea. I have gmail, but that's personal-technical. My yahoo is personal-relational. 

rlcanseco
rcaw8
roycan

## AWS Market Place for JasperReports

I went cheap and took the t2.small ec2 instance. This is expected to bill at Php500/mo if I leave it on. I'm not sure how fast it will be. The recommended infrastructure costs 3 times that. Let's try it out like this first.

vpc-92ca23ea
subnet-80acebf9 (172.31.16.0/20)

created a key pair: jasperkey.pem 
placed in SAFS-AWS


Hehehe... it didn't work out in the end. The free tier is not enough to support a Jasper Server Instance. And I'm hesitant to do $50/mo deal with AWS at this point. 

I think I'll try other cloud providers now.  I'm sure I'll find analogs to the lessons I learned through the AWS cloud. 


--------------------
### Quote of the day 

If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.    
*Andrew Carnegie - 1835-1919, American Industrialist, Philanthropist*

-----------------
