---
layout: post
title: "Backing up a Joomla Site"
date: 2014-03-03	
remarks: "recipe"
categories: Skills
tags: 
- webdev
- Joomla
---



MAKING A BACKUP/ TEST SITE FOR (e.g. JOBSANNEX.COM)

## Objectives:

make a production site out of the finalized development site. 	
Turn the development site into a testing site
make the old website into an 	archived website


## steps:

Copy the joomla files into the production folder using the host's (e.g. fatcow) filemanager  
Try opening the website from the new folder to see if the files work  
Create a new database using the name of the new folder  
Export the contents of the old database and download as a zip file and unzip  
Import the contents as an sql file  
Update db detials in the configuration.php file in the joomla root directory of the production site
Check the websites if they work  
Create a subdomain for the old website  
Redirect the URL to the new production site folder



## afterwards:

1. check that the old version 1.7 still works.
the website is viewable and navigatable
the control dashboard login works
changes made are saved
2. check that the production site works
the website is viewable and navigatable
the control dashboard login works
changes made are saved
3. check that the new testing site works
the website is viewable and navigatable
the control dashboard login works
changes made are saved
4. make sure that the changes in the test site does not affect the production site
5. create and replace the old zip archive files in the fatcow host
6. remove unused subdomains.

