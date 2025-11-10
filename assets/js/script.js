
// Theme toggle
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('adtrian_theme', theme);
  // update buttons text
  Array.from(document.querySelectorAll('.btn-toggle')).forEach(b => b.textContent = theme === 'dark' ? 'Light' : 'Dark');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('adtrian_theme') || 'dark';
  setTheme(saved);

  document.querySelectorAll('.btn-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(cur === 'dark' ? 'light' : 'dark');
    });
  });

  // custom cursor
  const cursor = document.getElementById('cursor');
  window.addEventListener('mousemove', e=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  window.addEventListener('mousedown', ()=>{ cursor.style.transform = 'translate(-50%,-50%) scale(0.8)'; });
  window.addEventListener('mouseup', ()=>{ cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });

  // scroll reveal
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

  // filters on portfolio page
  const filterBtns = document.querySelectorAll('.filter-btn');
  if(filterBtns.length){
    const cards = document.querySelectorAll('.card');
    filterBtns.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        filterBtns.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        cards.forEach(c=>{
          if(filter === 'all' || c.getAttribute('data-category') === filter){
            c.style.display = '';
            // small reveal
            c.classList.add('visible');
          } else {
            c.style.display = 'none';
          }
        });
      });
    });
  }
});
