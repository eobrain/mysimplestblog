---  
slug: 36ratcqn2x
title: Measuring Privacy-Value Trade-Offs
created: 2024-01-05 04:44:03.556036165+00:00
---  
In a previous post, [Seven Hard Privacy UX Problems][1], number five was

> How do we avoid adding usability burdens that reduce the product value for the majority of times when people are not particularly concerned about privacy, while still making sure they are empowered to take privacy-protective measures for sensitive user journeys?

One example to illustrate this problem is a consumer product with a "personalized" mode that provides extra user value. For most people most of the time this would not add any risk. But for some people some of the time there could be some risk of their personal data being collected or someone observing the personalized output of the product.

Imagine a shopping-list app that can work in a generic way as just a place to add items to a list and cross off items when you buy them. But it can also work in a personalized way, tracking your location and remembering all your past lists so that when you go shopping to a particular place it can predict what items you might want to buy there. Most people most of the time get value from the personalized feature and incur little risk from it. However, consider the case of someone using the app for purchases related to a sensitive area like reproductive health. This raises risks. For example, someone shoulder-surfing could notice sensitive information when the user next visits a pharmacist. Or in jurisdictions that criminalize abortion, a local prosecutor could subpoena the shopping list information.

We can lay out the possible outcomes in a 2×2 table:

|    |Personalized|Generic|
|---|---|---|
|**Safe user journey**|Good state: person gets the value of personalization and is unconcerned about the personal data collection|Bad state: person is losing out on the value of personalization|
|**Sensitive user journey**|Bad state: personal data is collected that puts person at risk|Good state: no personal data collected that might put person at risk|

Let's summarize this as

|    |Personalized|Generic|
|---|---|---|
|**Safe**|Value|Waste|
|**Sensitive**|Exposed|Protected|

Precision: how many generic user journeys are sensitive
$Precision = Protected / {Protected + Waste}$

Recall: how many sensitive user journeys are generic
$Recall = $Protected / {Protected + Exposed}$

F1
$F1 = 2 * Protected / {2 * Protected  + Waste + Exposed}$

[1]: https://eamonn.org/seven-hard-privacy-ux-problems



