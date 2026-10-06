const blocks = [
{
 title:"Точное и приближённое значение",
 short:"Значения",
 theory:`<p class="theory"><b>Точное значение</b> записывает величину без ошибки. <b>Приближённое значение</b> заменяет точное число близким к нему числом.</p>
 <div class="formula">1/2 = 0,5 — точно<br>√2 ≈ 1,41 — приближённо</div>
 <div class="example"><b>Пример.</b> Число π нельзя точно записать конечной десятичной дробью, поэтому 3,14 — его приближённое значение.</div>`,
 tasks:[
  {q:"3,14 для числа π — это…",choices:["приближённое значение","точное значение"],a:0,h:"Число π имеет бесконечную непериодическую десятичную запись."},
  {q:"0,5 для числа 1/2 — это…",choices:["приближённое значение","точное значение"],a:1,h:"Проверьте: 1 ÷ 2 даёт ровно 0,5."},
  {q:"1,4 для числа √2 — это…",choices:["точное значение","приближённое значение"],a:1,h:"√2 ≈ 1,4142…, поэтому 1,4 лишь близко к нему."},
  {q:"2,75 для числа 11/4 — это…",choices:["точное значение","приближённое значение"],a:0,h:"Выполните деление 11 на 4."},
  {q:"1,73 для числа √3 — это…",choices:["приближённое значение","точное значение"],a:0,h:"√3 — иррациональное число."},
  {q:"0,333 для числа 1/3 — это…",choices:["точное значение","приближённое значение"],a:1,h:"1/3 = 0,3333…; запись не заканчивается на третьей тройке."}
 ]
},
{
 title:"Абсолютная погрешность",
 short:"Погрешность",
 theory:`<p class="theory">Абсолютная погрешность показывает, насколько приближённое значение отличается от точного. Она всегда неотрицательна.</p>
 <div class="formula">Δ = |точное значение − приближённое значение|</div>
 <div class="example"><b>Пример.</b> 8,37 заменили числом 8,4.<br>|8,37 − 8,4| = 0,03.</div>`,
 tasks:[
  {q:"Точное значение 8,37, приближённое 8,4. Найдите абсолютную погрешность.",a:"0,03",h:"Вычтите одно значение из другого и возьмите модуль."},
  {q:"Точное значение 12,46, приближённое 12,5. Найдите абсолютную погрешность.",a:"0,04",h:"|12,46 − 12,5|."},
  {q:"Точное значение 3,1416, приближённое 3,14. Найдите абсолютную погрешность.",a:"0,0016",h:"Допишите нули: 3,1416 − 3,1400."},
  {q:"Точное значение 24,83, приближённое 25. Найдите абсолютную погрешность.",a:"0,17",h:"Погрешность — расстояние между 24,83 и 25."},
  {q:"Точное значение 0,786, приближённое 0,8. Найдите абсолютную погрешность.",a:"0,014",h:"Запишите 0,8 как 0,800."},
  {q:"Точное значение 51,204, приближённое 51,2. Найдите абсолютную погрешность.",a:"0,004",h:"51,2 = 51,200."}
 ]
},
{
 title:"Округление",
 short:"Округление",
 theory:`<p class="theory">Сначала найдите разряд, до которого округляете. Посмотрите на <b>первую цифру справа от него</b>: 0–4 — выбранную цифру не меняем; 5–9 — увеличиваем её на 1.</p>
 <div class="example"><b>Десятичная дробь.</b> 7,348 до сотых → в сотых стоит 4, справа от неё 8 → получаем 7,35.</div>
 <div class="notice"><b>Если округляем целое число до десятков, сотен, тысяч и т. д., отброшенные цифры заменяем нулями.</b><br><br>
 2847 до сотен: в разряде сотен стоит 8. Справа от неё 4, поэтому 8 не меняем. Десятки и единицы заменяем нулями:<br><b>2847 ≈ 2800.</b><br><br>
 7651 до десятков: в десятках стоит 5. Справа 1, поэтому получаем <b>7650</b>.<br>
 1496 до сотен: в сотнях стоит 4. Справа 9, поэтому увеличиваем 4 до 5 и получаем <b>1500</b>.</div>`,
 tasks:[
  {q:"Округлите 7,348 до десятых.",a:"7,3",h:"В разряде десятых стоит 3. Смотрите на следующую цифру — 4."},
  {q:"Округлите 7,348 до сотых.",a:"7,35",h:"В разряде сотых стоит 4, следующая цифра — 8."},
  {q:"Округлите 19,951 до десятых.",a:"20,0",alts:["20"],h:"После 9 в десятых стоит 5. При увеличении 9 возникает перенос в следующий разряд."},
  {q:"Округлите 0,0967 до сотых.",a:"0,10",alts:["0,1"],h:"В сотых стоит 9, следующая цифра — 6. Учтите перенос."},
  {q:"Округлите 2847 до сотен.",a:"2800",h:"Сотни — цифра 8. Следующая цифра — 4. Десятки и единицы замените нулями."},
  {q:"Округлите 7651 до десятков.",a:"7650",h:"Десятки — цифра 5. Следующая цифра — 1. Единицы замените нулём."},
  {q:"Округлите 9,999 до сотых.",a:"10,00",alts:["10","10,0"],h:"Сотые — вторая цифра после запятой. Следующая цифра 9, поэтому произойдёт перенос."}
 ]
},
{
 title:"Точность округления",
 short:"Точность",
 theory:`<p class="theory">При обычном округлении максимальная абсолютная погрешность равна половине единицы разряда, до которого округляли.</p>
 <div class="formula">до целых → 0,5<br>до десятых → 0,05<br>до сотых → 0,005</div>
 <div class="example"><b>Пример.</b> Если после округления до десятых получили 12,3, то исходное число находится от 12,25 включительно до 12,35 не включительно.</div>`,
 tasks:[
  {q:"Какова максимальная погрешность при округлении до целых?",a:"0,5",h:"Половина единицы = 0,5."},
  {q:"Какова максимальная погрешность при округлении до десятых?",a:"0,05",h:"Одна десятая — 0,1. Возьмите половину."},
  {q:"Какова максимальная погрешность при округлении до сотых?",a:"0,005",h:"Одна сотая — 0,01. Возьмите половину."},
  {q:"Число округлили до целых и получили 8. Укажите нижнюю границу возможных значений.",a:"7,5",h:"От результата отнимите максимальную погрешность 0,5."},
  {q:"Число округлили до десятых и получили 4,7. Укажите нижнюю границу возможных значений.",a:"4,65",h:"От 4,7 отнимите 0,05."},
  {q:"Число округлили до сотых и получили 2,35. Укажите верхнюю границу возможных значений.",a:"2,355",h:"К 2,35 прибавьте 0,005. Сама верхняя граница в промежуток не входит."}
 ]
},
{
 title:"Прикидка и оценка результата",
 short:"Прикидка",
 theory:`<p class="theory">Прикидка нужна, когда точный ответ не требуется: замените числа близкими и удобными для вычислений. Результат должен сохранять правильный порядок величины.</p>
 <div class="example"><b>Пример.</b> 19,8 · 5,1 ≈ 20 · 5 = 100.</div>`,
 tasks:[
  {q:"Выберите лучшую прикидку для 49,7 · 2,02.",choices:["50 · 20 ≈ 1000","50 · 2 ≈ 100","5 · 2 ≈ 10"],a:1,h:"49,7 близко к 50, а 2,02 — к 2."},
  {q:"Выберите лучшую прикидку для 598 : 3,01.",choices:["60 : 3 ≈ 20","600 : 30 ≈ 20","600 : 3 ≈ 200"],a:2,h:"Округляйте числа, не меняя их порядок."},
  {q:"Выберите лучшую прикидку для 10,2 · 29,8.",choices:["10 · 30 ≈ 300","10 · 3 ≈ 30","1 · 30 ≈ 30"],a:0,h:"10,2 близко к 10, а 29,8 — к 30."},
  {q:"Товар стоит 397 ₽. Хватит ли 2000 ₽ на 5 штук?",choices:["нет","да"],a:1,h:"397 близко к 400. Посчитайте 400 · 5, а затем учтите, что 397 меньше 400."},
  {q:"Один билет стоит 249 ₽. Хватит ли 1000 ₽ на 4 билета?",choices:["да","нет"],a:0,h:"249 чуть меньше 250, а 250 · 4 = 1000."},
  {q:"Масса одной коробки 1,98 кг. Примерно сколько весят 12 коробок?",choices:["около 120 кг","около 12 кг","около 24 кг"],a:2,h:"1,98 близко к 2. Умножьте 2 на 12."}
 ]
},
{
 title:"Итоговая тренировка",
 short:"Итог",
 theory:`<p class="theory">Здесь не указано, какое правило понадобится. Сначала определите тип задания, затем решайте.</p>`,
 tasks:[
  {q:"Округлите 36,784 до сотых.",a:"36,78",h:"Определите разряд сотых и посмотрите на следующую цифру."},
  {q:"Точное значение 6,28 заменили числом 6,3. Найдите абсолютную погрешность.",a:"0,02",h:"Найдите расстояние между двумя числами."},
  {q:"2,236 для √5 — это…",choices:["точное значение","приближённое значение"],a:1,h:"√5 — иррациональное число."},
  {q:"Какова максимальная погрешность при округлении до десятых?",a:"0,05",h:"Возьмите половину единицы разряда округления."},
  {q:"Выберите разумную прикидку для 79,8 · 5,02.",choices:["8 · 5 ≈ 40","80 · 50 ≈ 4000","80 · 5 ≈ 400"],a:2,h:"Округлите оба множителя до удобных близких чисел."},
  {q:"Округлите 1496 до сотен.",a:"1500",h:"Сотни — цифра 4. Справа стоит 9, поэтому 4 увеличивается до 5, а остальные цифры заменяются нулями."},
  {q:"Число округлили до целых и получили 23. Укажите нижнюю границу возможных значений.",a:"22,5",h:"Максимальная погрешность при округлении до целых равна 0,5."}
 ]
}
];

const homework = {
 title:"Домашнее задание",
 intro:"10 заданий по материалу занятия. Этот блок доступен независимо от основного тренажёра.",
 tasks:[
  {q:"Округлите 43,768 до десятых.",a:"43,8",h:"Посмотрите на цифру сотых."},
  {q:"Округлите 5726 до сотен.",a:"5700",h:"В сотнях стоит 7, справа — 2. Десятки и единицы замените нулями."},
  {q:"Округлите 9951 до сотен.",a:"10000",h:"В сотнях стоит 9, справа — 5. Возникает перенос."},
  {q:"Точное значение 7,82 заменили числом 7,8. Найдите абсолютную погрешность.",a:"0,02",h:"Найдите модуль разности."},
  {q:"Точное значение 0,394 заменили числом 0,4. Найдите абсолютную погрешность.",a:"0,006",h:"0,4 = 0,400."},
  {q:"1,414 для √2 — это…",choices:["приближённое значение","точное значение"],a:0,h:"√2 = 1,4142…"},
  {q:"Какова максимальная погрешность при округлении до сотых?",a:"0,005",h:"Половина одной сотой."},
  {q:"Число округлили до десятых и получили 9,2. Укажите нижнюю границу.",a:"9,15",h:"Вычтите 0,05."},
  {q:"Выберите разумную прикидку для 201 · 4,98.",choices:["200 · 50 ≈ 10000","20 · 5 ≈ 100","200 · 5 ≈ 1000"],a:2,h:"201 близко к 200, 4,98 — к 5."},
  {q:"Тетрадь стоит 198 ₽. Хватит ли 1000 ₽ на 5 тетрадей?",choices:["нет","да"],a:1,h:"198 меньше 200, а 200 · 5 = 1000."}
 ]
};

const extra = {
 title:"Дополнительная практика",
 intro:"Задания для повторного прохождения. Их можно решать в любом количестве.",
 tasks:[
  {q:"Округлите 6,455 до сотых.",a:"6,46",h:"В сотых стоит 5, следующая цифра — 5."},
  {q:"Округлите 3849 до десятков.",a:"3850",h:"В десятках стоит 4, справа — 9."},
  {q:"Округлите 12449 до сотен.",a:"12400",h:"В сотнях стоит 4, справа — 4."},
  {q:"Округлите 12550 до сотен.",a:"12600",h:"В сотнях стоит 5, справа — 5."},
  {q:"Точное значение 15,73 заменили числом 15,7. Найдите абсолютную погрешность.",a:"0,03",h:"Найдите модуль разности."},
  {q:"Точное значение 2,7183 заменили числом 2,72. Найдите абсолютную погрешность.",a:"0,0017",h:"2,7200 − 2,7183."},
  {q:"0,125 для числа 1/8 — это…",choices:["приближённое значение","точное значение"],a:1,h:"Выполните деление 1 на 8."},
  {q:"3,16 для √10 — это…",choices:["точное значение","приближённое значение"],a:1,h:"√10 — иррациональное число."},
  {q:"Какова максимальная погрешность при округлении до целых?",a:"0,5",h:"Половина единицы."},
  {q:"Число округлили до сотых и получили 5,48. Укажите нижнюю границу.",a:"5,475",h:"Вычтите 0,005."},
  {q:"Выберите разумную прикидку для 399 · 2,01.",choices:["40 · 2 ≈ 80","400 · 2 ≈ 800","400 · 20 ≈ 8000"],a:1,h:"399 близко к 400, 2,01 — к 2."},
  {q:"Цена одной упаковки 51 ₽. Примерно сколько стоят 19 упаковок?",choices:["около 100 ₽","около 10000 ₽","около 1000 ₽"],a:2,h:"51 ≈ 50, 19 ≈ 20."}
 ]
};

let state={view:"block",block:0,mode:"theory",task:0,correct:0,wrong:0};
let selected=null,locked=false;
const card=document.getElementById("card"),label=document.getElementById("sectionLabel"),ptext=document.getElementById("progressText"),pbar=document.getElementById("progressBar");

function norm(v){return String(v).trim().replace(/\s/g,"").replace(".",",").replace(/−/g,"-")}
function currentSet(){if(state.view==="homework")return homework;if(state.view==="extra")return extra;return blocks[state.block]}
function setNavActive(){
 document.querySelectorAll(".nav-btn").forEach(b=>{
   const key=b.dataset.nav;
   const active=(state.view==="block" && key===String(state.block)) || key===state.view;
   b.classList.toggle("active",active);
 });
}
function updateProgress(){
 const set=currentSet(), total=set.tasks.length;
 let done=state.mode==="theory"?0:Math.min(state.task,total);
 let pct=Math.round(done/total*100);
 if(state.mode==="complete")pct=100;
 pbar.style.width=pct+"%";ptext.textContent=pct+"%";
 if(state.view==="block") label.textContent=`${state.block+1} из ${blocks.length} · ${set.title}`;
 else label.textContent=set.title;
}
function render(){
 selected=null;locked=false;setNavActive();updateProgress();
 const set=currentSet();
 if(state.mode==="theory" && state.view==="block"){
   card.innerHTML=`<h2>${set.title}</h2>${set.theory}<div class="actions"><button class="btn" id="start">Начать задания</button></div>`;
   document.getElementById("start").onclick=()=>{state.mode="tasks";state.task=0;render()};
   return;
 }
 if(state.mode==="complete"){
   card.innerHTML=`<div class="block-complete"><h2>${set.title}: готово</h2><p>Верных попыток: <b>${state.correct}</b>. Ошибок: <b>${state.wrong}</b>.</p>
   <div class="actions"><button class="btn" id="repeat">Пройти блок ещё раз</button>${state.view==="block"&&state.block<blocks.length-1?'<button class="btn secondary" id="nextBlock">Следующий блок</button>':''}</div></div>`;
   document.getElementById("repeat").onclick=()=>openView(state.view,state.block);
   const nb=document.getElementById("nextBlock");if(nb)nb.onclick=()=>openView("block",state.block+1);
   return;
 }
 if(state.view!=="block" && state.mode==="intro"){
   card.innerHTML=`<h2>${set.title}</h2><p class="theory">${set.intro}</p><div class="actions"><button class="btn" id="start">Начать</button></div>`;
   document.getElementById("start").onclick=()=>{state.mode="tasks";state.task=0;render()};
   return;
 }
 renderTask(set);
}
function renderTask(set){
 const task=set.tasks[state.task];
 let input=task.choices
 ? `<div class="choices">${task.choices.map((x,i)=>`<button type="button" class="choice" data-i="${i}">${x}</button>`).join("")}</div><div class="actions"><button type="button" class="btn" id="check" disabled>Проверить</button></div>`
 : `<div class="input-row"><input class="answer" id="answer" inputmode="decimal" autocomplete="off" placeholder="Введите ответ"><button type="button" class="btn" id="check">Проверить</button></div>`;
 card.innerHTML=`<p class="task-index">Задание ${state.task+1} из ${set.tasks.length}</p><div class="task">${task.q}</div>${input}<div class="actions"><button class="btn secondary" id="hint">Подсказка</button></div><div id="feedback" aria-live="polite"></div>`;
 if(task.choices){
   const cb=document.getElementById("check");
   document.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{if(locked)return;document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selected=Number(b.dataset.i);cb.disabled=false});
   cb.onclick=check;
 } else {
   document.getElementById("check").onclick=check;
   document.getElementById("answer").addEventListener("keydown",e=>{if(e.key==="Enter")check()});
 }
 document.getElementById("hint").onclick=()=>document.getElementById("feedback").innerHTML=`<div class="feedback hint"><b>Подсказка.</b> ${task.h}</div>`;
}
function check(){
 if(locked)return;
 const set=currentSet(),task=set.tasks[state.task];let ok=false;
 if(task.choices){if(selected===null)return;ok=selected===task.a}
 else {const el=document.getElementById("answer");if(!el.value.trim())return;ok=[task.a,...(task.alts||[])].map(norm).includes(norm(el.value))}
 const fb=document.getElementById("feedback");
 if(ok){locked=true;state.correct++;fb.innerHTML=`<div class="feedback ok"><b>Верно.</b></div><div class="actions"><button class="btn" id="next">Дальше</button></div>`;document.getElementById("next").onclick=next}
 else {state.wrong++;fb.innerHTML=`<div class="feedback bad"><b>Пока неверно.</b> ${task.h}</div>`}
}
function next(){
 const set=currentSet();
 if(state.task+1<set.tasks.length){state.task++;render()}
 else {state.mode="complete";render()}
}
function openView(view,block=0){
 state={view,block,mode:view==="block"?"theory":"intro",task:0,correct:0,wrong:0};render();
 window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>{const k=b.dataset.nav;if(k==="homework"||k==="extra")openView(k);else openView("block",Number(k))}));
render();