# Installation Instructions

First off you'll need to enable custom HTML templates in HelpDocs. Head to **Settings** > **Brand**, and choose **Custom** as your **Template**.

The files in this folder match up with the headers in **Settings** > **Templates**. You should copy each to their respective tab and hit **Save**.

You can load our default CSS from the HelpDocs CDN by adding this line to the top of Settings > Code > Scripts:

```
<link rel="stylesheet" type="text/css" href="https://cdn.helpdocs.io/css/v3/boxedinstant.min.css?cb=custom">
```

If you want to customize the CSS instead, don't bother with the `<link ...>` above. Head to [the CSS file](https://cdn.helpdocs.io/css/v3/boxedinstant.min.css?cb=custom) in your browser and copy the contents into **Settings** > **Code** > **CSS**.

Now you can edit any of the files to your heart's content. 🎉
