# STIFF Website

Mirror of http://s-t-i-f-f.com/ created via htttrack.


```
# download website
httrack -O s-t-i-f-f.com  http://s-t-i-f-f.com/
cd s-t-i-f-f.com/s-t-i-f-f.com/
# remove 'Mirrored from Htttrack' comment
git grep -l '<!-- Mirrored from' | xargs sed -i -e 's/<!-- Mirrored from.*-->//'
# remove domain from url
git grep -l 'http://www.s-t-i-f-f.com/pages' | xargs sed -i -e 's/http:\/\/www.s-t-i-f-f.com\/pages/\/pages/'
# add html extension to links
git grep -l '/pages' | xargs sed -i -e 's/\/pages\/\([0-9]*-[^"]*\)/\/pages\/\1.html/' | grep '/pages'
```
