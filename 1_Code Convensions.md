# Code Convensions

## Style

### Comments

#### HTML

The start and end of an HTML block use CSS-style declarations in comments.
 This is so that in very large HTML blocks, 
 especially in deeply embedded stacked HTML tags, 
 code is easier to read because tags do not contain classes, ids, 
 or other tag attributes in the closing portion of the tag. 

*For example:*

<!-- .class-name START -->
<div class="class-name">
    Content for div section with class 'class-name'.
</div>
<!-- .class-name END -->