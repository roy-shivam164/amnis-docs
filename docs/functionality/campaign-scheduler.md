---
sidebar_position: 6
---

# Campaign Scheduler

It allows users to create campaigns like flowcharts using dialog options such as **Action**, **Trigger**, **Rule**, and **End**.

## Features

## 1. Actions

They are used for various actions such as Send E-mail and SMS, Send E-mail, Send SMS, and Delete (to delete a node from the campaign).

### Sub-Features of Actions

a). **Send E-mail and SMS**: This Action is used to create two nodes in the campaign flow, one for sending E-mail and the other for sending SMS.

- **Send E-mail** (via Twilio or Pardot)
- **Send SMS** (via Quiq or Twilio)

b). **Send E-mail**: This Action is used to create only Send E-mail Nodes using which users can only send E-mails. Here, users have two options to choose from.

- **Send By Pardot**
- **Send By Twilio**

c). **Send SMS**: his Action is used to create only Send SMS Nodes using which the user can only send SMS. Further, users have two more options:

- **Send By Twilio**
- **Send By Quiq**

d). **Delete**: This Action is used to Remove a particular node from the campaign Tree if not required.

### Snapshots for Actions

:::tip snapshots
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-b7c42732-4a83-4bea-b143-2af303f6718d.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster) ![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-7f475846-91ce-4016-98b6-871cf72843c7.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)<br></br>
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-57f4a3d9-0619-4f76-aee5-25cc3a793d82.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-a8b28043-a0b7-4dc8-932d-bb310e700011.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## 2. Triggers

They are used to check for an event that might have happened in the customer journey in the campaign, eg. if the user has opened an email or whether the email has been delivered.

### Sub-Features of Triggers

a). **Email Open**: This Trigger checks whether an email has been opened by the user or not.
b). **Email Delivered**: This Trigger Checks whether an email has been delivered to the user or not.

### Snapshots for Triggers

:::tip snapshots
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-96fb6153-6058-43ff-96a4-f747442092df.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster) ![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-83c6b56d-5dc4-4142-9d90-a6c4084a0637.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## 3. Rules

They are used to execute a particular branch or sub-flow of the campaign based on some condition when they are satisfied.

### Sub-Features of Rules

a). **Wait**:Here, the user is supposed to choose from Option or type in
for how much duration they want to wait until the condition is satisfied.

### Snapshots for Rules

:::tip Snapshots
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-5cabfcc7-342f-41e2-ae91-01c301965983.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster) ![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-ed6becf4-11cc-41d2-bcf2-d1c8a5e4d7b8.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)<br></br>![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-a7450adf-3825-4b9e-a3cf-110e5421f6b6.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## 3. End

It is used to insert an End Node, denoting the End of the Campaign.<br></br>
:::tip snapshot
![Example banner](../../src/assets/Screenshot%202023-09-26%20104236.png)
:::

## Customer Journey Count

Here, users also can view the whole customer journey how many customers are engaged in the present campaign and how many of them have crossed how many levels of the journey in each step of any campaign that has run or is running.

### Snapshots for Customer Journey

:::tip Image 1
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-e8534eb4-3eda-43e7-8ee9-ed16d1699ef0.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## Select/Preview Email Templates

- In this section, if a user wants to send an E-mail via Twilio, then a dialog will ask the user to choose E-mail Templates from the available ones
- Here, the user can also see the Thumbnail of a particular E-mail Template.
- Also, if a User wants to Preview the Template design, then a preview button along-side will let the user preview the template, before selecting it.

### Snapshots for E-mail Template Selection

:::tip Image 1  
![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-47605fcd-bd5a-4ba4-b332-1b82c739deff.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

:::tip Image 2

![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-478f93e5-82d8-4c76-bdb1-cbb906ad8be3.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## Select/Preview SMS templates

- This feature allows users to choose SMS templates for Twilio or Quiq.
- It also allows users to preview the SMS Templates before the final selection.

### Snapshots for SMS Template Selection

:::tip -

![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-00748152-26f7-4187-9c4a-d95e03cbd8e5.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-05fb69b6-f212-464f-92ce-e73684d2ad88.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)<br></br>![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-d79fd7eb-2c38-48d2-966e-59550c182a36.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::

## Snapshots for Campaign Creation

:::tip Image 1

![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-81eee33d-25f8-48b3-86ff-0e138a4a104b.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::
:::tip Image 2

![Example banner](https://cyber-group.visualstudio.com/14387330-a399-4d18-9305-480aa7332758/_apis/git/repositories/159a0566-bccb-44c5-822c-e9817724fb96/Items?path=/.attachments/image-965d0a02-c9b8-47a5-80f1-6ebd91dd6dce.png&download=false&resolveLfs=true&%24format=octetStream&api-version=5.0-preview.1&sanitize=true&versionDescriptor.version=wikiMaster)
:::
