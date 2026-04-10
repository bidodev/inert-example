const modal       = document.getElementById('modal');
const pageContent = document.getElementById('pageContent');
const stripe      = document.getElementById('stripe');
const pageBadge   = document.getElementById('pageBadge');
const dialogTag   = document.getElementById('dialogTag');
const pageTag     = document.getElementById('pageTag');
const openBtn     = document.getElementById('openBtn');
const codeBlock   = document.getElementById('codeBlock');

function openDialog() {
  modal.showModal();
  pageContent.inert = true;
  stripe.style.display = 'block';
  pageBadge.style.display = 'block';
  dialogTag.textContent = 'dialog: open';
  pageTag.textContent = 'page: inert';
  pageTag.className = 'tag tag-inert';
  openBtn.disabled = true;
  codeBlock.innerHTML = `<span class="hl">&lt;dialog</span> <span class="attr">id</span>=<span class="val">"modal"</span> <span class="attr" style="color:#185FA5;font-weight:600">open</span><span class="hl">&gt;</span>
  <span class="cm">&lt;!-- dialog content --&gt;</span>
<span class="hl">&lt;/dialog&gt;</span>

<span class="hl">&lt;main</span> <span class="attr">id</span>=<span class="val">"page"</span> <span class="kw-inert">inert</span><span class="hl">&gt;</span>  <span class="cm">← completely frozen</span>
  <span class="cm">&lt;!-- page content --&gt;</span>
<span class="hl">&lt;/main&gt;</span>`;
}

function closeDialog() {
  modal.close();
  pageContent.inert = false;
  stripe.style.display = 'none';
  pageBadge.style.display = 'none';
  dialogTag.textContent = 'dialog: closed';
  pageTag.textContent = 'page: interactive';
  pageTag.className = 'tag tag-active';
  openBtn.disabled = false;
  codeBlock.innerHTML = `<span class="hl">&lt;dialog</span> <span class="attr">id</span>=<span class="val">"modal"</span><span class="hl">&gt;</span>
  <span class="cm">&lt;!-- dialog content --&gt;</span>
<span class="hl">&lt;/dialog&gt;</span>

<span class="hl">&lt;main</span> <span class="attr">id</span>=<span class="val">"page"</span><span class="hl">&gt;</span>
  <span class="cm">&lt;!-- page content --&gt;</span>
<span class="hl">&lt;/main&gt;</span>

<span class="hl">&lt;script&gt;</span>
  modal.<span class="attr">showModal</span>();
  page.<span class="attr">inert</span> = <span class="val">true</span>;  <span class="cm">← page frozen</span>
<span class="hl">&lt;/script&gt;</span>`;
}
