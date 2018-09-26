---
layout: post
title: "MySQL datatypes"	
remarks: quick reference
categories: Teaching
tags: 
- soft_engg
---


# Numeric Data


## Integers

Required Storage and Range for Integer Types Supported by MySQL


| Type      | Storage (Bytes) | Minimum Value Signed | Minimum Value Unsigned | Maximum Value Signed | Maximum Value Unsigned |
|-----------|-----------------|----------------------|------------------------|----------------------|------------------------|
| TINYINT   | 1               | -128                 | 0                      | 127                  | 255                    |
| SMALLINT  | 2               | -32768               | 0                      | 32767                | 65535                  |
| MEDIUMINT | 3               | -8388608             | 0                      | 8388607              | 16777215               |
| INT       | 4               | -2147483648          | 0                      | 2147483647           | 4294967295             |
| BIGINT    | 8               | -2<sup>63</sup>                 | 0                      | 2<sup>63</sup>-1                | 2<sup>64</sup>-1                  |




## Decimals (money)

    salary DECIMAL(5,2)

This means the the salary field has a maximum of 5 numbers with a maximum of 2 numbers after the decimal point. 

So values that can be stored in the salary column range from -999.99 to 999.99.

## Floats/ Doubles  (scientific)

* float uses 4 bytes 
* double uses 8 bytes
* these approximate numbers 
* carefule when doing approximations



# Date types

The following are the form that the date datatype would look like.

| Data Type | “Zero” Value          |
|-----------|-----------------------|
| DATE      | '0000-00-00'          |
| TIME      | '00:00:00'            |
| DATETIME  | '0000-00-00 00:00:00' |
| TIMESTAMP | '0000-00-00 00:00:00' |
| YEAR      | 0000                  |


# String types

* varchar(N)
* text
  * tinytext
  * text 
  * mediumtext
  * longtext
* blob
  * tinyblob
  * blob
  * mediumblob
  * longblob

  