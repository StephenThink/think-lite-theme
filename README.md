# Think Lite

## CMS

### Dashboard

`config/statamic/cp.php`
- Think Creative
- Pages
- Blog
- Images without Alt Text in Assets

#### Think Creative

This is a widget that can be found, in two places.
`app/Widgets/ThinkCreative.php` - This references the next file.
`resources/views/widgets/thinkcreative.blade.php` - This is the code for the widget that the user see's.

#### Pages

This is linking to the **Pages** Collection

#### Blog

This is linking to the **Blog** Collection

#### Images without Alt Text in Assets
[Market Place](https://statamic.com/addons/novu/images-missing-alt)
This goes through all the images and points out any that doesn't have an ALT tag.

## Assets

This is broken down into various **Containers**.  This is to aid image organisation.

- Blog Thumbnail
- Content Landscape Images
- Content Portrait Images
- Content Videos
- Full Images
- Gallery
- Hero
- Social
- Team Members
- Think

To modify these containers and where they are located this is the file you need to change: `config/filesystems.php`.

The different **Containers** have been linked into the different filesystems, and they do not modify the original images.  The only thing that happens is the are warmed in the `Glide` folder.

## Navigation

- Main
  - Desktop
  - Mobile

### Desktop
This has been setup to allow the `Navigation > Main Nav` to be used.  Including Children by default the **Parents** of the **Children** is not a clickable link.

The **Desktop** Navigation has been broken into several components so that they can be easily changed from client to client.

- components
  - navigation
  - desktop.antlers.html
    - desktop
      - _children_list.antlers.html: This contains the code for the children links.
      - _extra_link.antlers.html: This contains the code for the extra menu that can be found in `Globals > Main Nav Right`.
      - _top_link.antlers.html: This contains the code for any link that doesn't have children.

### Mobile
This has been setup as an alpineJs in the `mobile.antlers.html`.
At the moment the dropDown functionality has been removed as this interferes with BarbaJs. The various components have various lines of code commented out for when a solution can be found.

- components
  - navigation      
  - mobile.antlers.html
    - mobile
      - _children.antlers.html: This contains the code for the children links.
      - _extra_link.antlers.html: This contains the code for the extra menu that can be found in `Globals > Main Nav Right`.
      - _parent_link.antlers.html: This contains the code foe the parent of the children links.
      - _top_link.antlers.html: This contains the code for any link that doesn't have children.

## Footer

On a **Mobile** device the footer will flow with in a column.  Where as on a desktop it is displayed over the page width.

- components
  - footer
    - footer.antlers.html
    - left.antlers.html
    - right.antlers.html
    - bottom.antlers.html

The footer is broken up into different sections and the footer can be changed in the CMS under

- Globals
  - Site Admin
    - Footer
      - Left Side
      - Right Side
      - Bottom

### Left Side

There is a heading that is coded as an H4 and can be changed in the `Footer Heading`.
There is some space for content underneath the heading, this can also be changed in the `Footer Content`.
There is some code commented out for social or anything else to be inserted there.

These elements are animated by `BarbaJs`, using there id's.  The Animation settings are found in the `resources/js/animations/footer.js`.

### Right Side

These are Linked to different Navigations, so you have a `Menu Title` and then you link the `Navs Field` to the Navigation menu you want to use.  If there is only one menu then they will come from the right hand side of the page.

These elements are animated by `BarbaJs`, using there id's.  The Animation settings are found in the `resources/js/animations/footer.js`.

### Bottom

This is the copyright area and who built it.
`Site By` will appear on the footer.
`Company Link` will make the `Site By` a link.
`Copyright Year` allows for a number to be put in, if there isnt a number in it then it will not show on the bottom of the page.

These elements are animated by `BarbaJs`, using there id's.  The Animation settings are found in the `resources/js/animations/footer.js`.

## Globals

- Client
- Main Nav Right
- Site Admin

### Site Admin

This is broken into different sections

- Main
  - Cookies
  - Google Analytics
- Icons and Site Images
  - Webpage
    - By32
    - By192
    - Apple Touch
  - Error Pages
    - error404
    - error500
- Footer
  - Left Side
  - Right Side
  - Bottom

## FieldSets

- Button
- Call To Action
- Column
- Page Content
- Section
- Section Creation
- Video

### Button

`resources/views/components/page/_button.antlers.html`

- Button Label - This is what is shown to the visitor.
- Button Link - Where does the button take you to?
- Button Style - How do you want the Button to look?
- Button Description - This is for accessibility purposes to help people who use screen readers.

The **Button Style** is basically linked to the class names of `button-primary, button-secondary, button-tertiary`.

### Call To Action

`resources/views/components/page/call_to_actions/call_to_action_default.antlers.html`

- section_detail
- CTA Content - This is the text that you want to display to the visitor.

### Column
`resources/views/sets/column`
- Content Alignment - How do you want the content of the column to appear?
- Middle Gap - This will increase the gap between the two columns
- Column - This covers when a column is used, you can insert different components into it.

- Sets
  - Media
    - Image Landscape
      `resources/views/sets/column/image_landscape.antlers.html`
      - Image
      - Show Text
      - Image Text
    - Image Portrait
    `resources/views/sets/column/image_portrait.antlers.html`
      - Image
    - Video
    `resources/views/sets/column/video.antlers.html`
      - Video (Fieldset)
  - Misc
    - Call to action
    `resources/views/sets/column/call_to_action.antlers.html`
      - CTA Content
      - Buttons
    - Form
    `resources/views/sets/column/form.antlers.html`
      - Form Title
      - Form Content
      - Type of form
      - Submit Text
      - Success Message
    - Item List
    `resources/views/sets/column/item_list.antlers.html`
      - Bulleted Items
    - Quote
    `resources/views/sets/column/quote.antlers.html`
      - Quotation
      - Quote Text Colour
      - Quote Icon Colour

### Page Content
`resources/views/sets/page`
- Sets
  - Page
    - Hero
    `resources/views/sets/page/hero_with_image.antlers.html`
      - Heading
      - Sub Heading
      - Hero Image
    - Section
    `resources/views/sets/page/sections.antlers.html`
      - section_detail
      - section_creation
    - News
    `resources/views/sets/page/news.antlers.html`
      - section_detail
      - Heading
      - News Entries
    - Collections
    `resources/views/sets/page/collections.antlers.html`
      - section_detail
      - Which Collection
  - Call To Actions
    - Call To Action
    `resources/views/sets/page/call_to_action.antlers.html`
      - call_to_action_default
    - Call To Action with Buttons
    `resources/views/sets/page/call_to_action_with_buttons.antlers.html`
      - call_to_action_default
      - Buttons

### Section (section_detail)
`resources/views/sets/page/sections.antlers.html`
`resources/fieldsets/section_detail.yaml`

- Section Colour - This has tailwind classes in that you can change.
- Top Padding - This has css classes `padding-top-none, padding-top-small, padding-top-medium, padding-top-large, padding-top-xlarge`.
- Bottom Padding - This has css classes `padding-bottom-none, padding-bottom-small, padding-bottom-medium, padding-bottom-large, padding-bottom-xlarge`.

### Section Creation (section_creation)
`resources/fieldsets/section_creation.yaml`
- Sets
  - Block
    - Sub Heading
    `resources/views/sets/sections/sub_heading.antlers.html`
      - Sub Heading Title
      - Sub Heading Content
      - Sub Colour
      - Sub Content Colour
    - Full Width Box
    `resources/views/sets/sections/full_width_box.antlers.html`
      - Box
      - Icon Colour
      - Title Colour
      - Content Colour
      - Box Colour
    - Quotation
    `resources/views/sets/sections/quotation.antlers.html`
      - Quotation
      - Quote Text Colour
      - Quote Icon Colour
    - Form
    `resources/views/sets/sections/form.antlers.html`
      - Form Title
      - Form Content
      - Type of form
      - Submit Text
      - Success Message
    - Team List
    `resources/views/sets/sections/team_list.antlers.html`
      - Team Entries
      - Name Colour
      - Position Colour
  - Media
    - Image
    `resources/views/sets/sections/full_width_box_with_image.antlers.html`
      - Full Image
      - Additional Options
      - Image Width
      - Rounded Border
    - Video
    `resources/views/sets/sections/video.antlers.html`
      - Video (fieldset)
    - Gallery
    `resources/views/sets/sections/gallery.antlers.html`
      - Mortar
  - Column Blocks
    - Two Column Box
    `resources/views/sets/sections/two_column_box.antlers.html`
      - Column (fieldset)
      - Column (fieldset)
    - Uneven Blocks
    `resources/views/sets/sections/uneven_blocks.antlers.html`
      - Stacks
      - Title Colour
      - Content Colour
    - Three Stack Boxes
    `resources/views/sets/sections/three_stack_boxes.antlers.html`
      - Icon Colour
      - Title Colour
      - Content Colour
      - Box Colour
      - Boxes

### Video

- Top Padding - This has css classes `padding-top-none, padding-top-small, padding-top-medium, padding-top-large, padding-top-xlarge`.
- Bottom Padding - This has css classes `padding-bottom-none, padding-bottom-small, padding-bottom-medium, padding-bottom-large, padding-bottom-xlarge`.
- Video
- Video Description
- Poster Image
- Show Additional Options
- Additional Options
- Muted
- Loop
- Autoplay
- Controls
- Preload Video
- Video Effects
