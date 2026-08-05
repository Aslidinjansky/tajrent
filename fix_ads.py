import re

with open('public/ads.html', 'r') as f:
    content = f.read()

# Fix 1: Replace renderCategories function
old_cats = """async function renderCategories() {
  const res = await fetch('/api/categories');
  const cats = await res.json();
  const el = document.getElementById('categories');
  let html = '<div class="cat-circle '+(currentCat==='all'?'active':'')+'" data-cat="all" onclick="selectCat(\\'all\\')">'
    +'<div class="cat-circle-img"><i class="fas fa-th"></i></div><span>Все</span></div>';
  cats.forEach(c => {
    const d = CAT_DATA[c.name] || {icon:'fa-box',color:'#6B7280'};
    html += '<div class="cat-circle '+(currentCat===c.name?'active':'')+'" data-cat="'+c.name+'" onclick="selectCat(\\''+c.name+'\\')">';
    html += '<div class="cat-circle-img" style="background:linear-gradient(135deg,'+d.color+',#fff)" onclick="selectCat(\\''+c.name+'\\')">';
    html += '<i class="fas '+d.icon+'" style="font-size:26px;color:#fff"></i>';
    html += '</div><span>'+c.name+'</span></div>';
  });
  el.innerHTML = html;
}"""

new_cats = """async function renderCategories() {
  const res = await fetch('/api/categories');
  const cats = await res.json();
  const el = document.getElementById('categories');
  let html = '<div class="cat-circle '+(currentCat==='all'?'active':'')+'" data-cat="all" onclick="selectCat(\\'all\\')">';
  html += '<div class="cat-circle-img"><i class="fas fa-th"></i></div>';
  html += '<span>Все</span></div>';
  cats.forEach(function(c) {
    var d = CAT_DATA[c.name] || {icon:'fa-box',color:'#6B7280'};
    html += '<div class="cat-circle '+(currentCat===c.name?'active':'')+'" data-cat="'+c.name+'" onclick="selectCat(\\''+c.name+'\\')">';
    html += '<div class="cat-circle-img" style="background:linear-gradient(135deg,'+d.color+' 0%,'+d.color+'88 100%)">';
    html += '<i class="fas '+d.icon+'" style="font-size:28px;color:#fff"></i>';
    html += '</div>';
    html += '<span>'+c.name+'</span>';
    html += '</div>';
  });
  el.innerHTML = html;
}"""

if old_cats in content:
    content = content.replace(old_cats, new_cats)
    print("Fixed renderCategories!")
else:
    print("ERROR: Could not find renderCategories to replace")
    print("Looking for partial match...")
    idx = content.find('async function renderCategories')
    if idx >= 0:
        print("Found at index", idx)
        print(repr(content[idx:idx+200]))
    else:
        print("Function not found at all")

# Fix 2: Fix [object Object] in renderAds - replace comments count
old_comments = "  +(ad.comments ? '<span class=\"stat-item\"><i class=\"fas fa-comment\"></i> '+ad.comments+'</span>' : '')"
new_comments = "  +(ad.commentCount ? '<span class=\"stat-item\"><i class=\"fas fa-comment\"></i> '+ad.commentCount+'</span>' : '')"

if old_comments in content:
    content = content.replace(old_comments, new_comments)
    print("Fixed comments!")
else:
    print("Could not find comments line")
    # Search for the actual pattern
    idx = content.find('[object Object]')
    if idx < 0:
        idx = content.find('fa-comment')
        if idx >= 0:
            print("Found fa-comment at", idx)
            print(repr(content[idx-50:idx+100]))

with open('public/ads.html', 'w') as f:
    f.write(content)
print("Done!")
