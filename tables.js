
var timetable_pn = new Timetable();
timetable_pn.setScope(7,19)
timetable_pn.addLocations(['pn_0', 'pn_1', 'pn_2', 'pn_3', 'pn_4']);
timetable_pn.addEvent('Analiza matematyczna 1.1 A', 'pn_0', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'1/10', type:'C', selected:0, week:'', code:'Z06-58a'}})
timetable_pn.addEvent('Analiza matematyczna 1.1 A', 'pn_0', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'1/2', type:'W', selected:0, week:'', code:'Z06-59a'}})
timetable_pn.addEvent('Logika dla informatyków', 'pn_0', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Logika dla informatyków', data: {person:'Radosław Katarzyniak', group:'3/10', type:'C', selected:0, week:'', code:'Z05-27c'}})
timetable_pn.addEvent('Fizyka 1.1B', 'pn_0', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','00'), {class:'Fizyka 1.1B', data: {person:'Ryszard Gonczarek', group:'1/10', type:'C', selected:0, week:'', code:'Z05-25a'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_1', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'2', type:'L', selected:0, week:'np', code:'Z05-30b'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_1', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'3', type:'L', selected:0, week:'p', code:'Z05-30c'}})
timetable_pn.addEvent('Analiza matematyczna 1.1 A', 'pn_1', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'2/10', type:'C', selected:0, week:'', code:'Z06-58b'}})
timetable_pn.addEvent('Logika dla informatyków', 'pn_1', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Logika dla informatyków', data: {person:'Radosław Katarzyniak', group:'2/10', type:'C', selected:0, week:'', code:'Z05-27b'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_2', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'4', type:'L', selected:0, week:'np', code:'Z05-30d'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_2', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'5', type:'L', selected:0, week:'p', code:'Z05-30e'}})
timetable_pn.addEvent('Analiza matematyczna 1.1 A', 'pn_2', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'3/10', type:'C', selected:0, week:'', code:'Z06-58c'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_3', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Urszula', group:'6', type:'L', selected:0, week:'np', code:'Z05-30f'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_3', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'', group:'7', type:'L', selected:0, week:'p', code:'Z05-30g'}})
timetable_pn.addEvent('Fizyka 1.1B', 'pn_3', new Date(0,0,0,'16','10'), new Date(0,0,0,'16','55'), {class:'Fizyka 1.1B', data: {person:'Ryszard Gonczarek', group:'4/10', type:'C', selected:0, week:'', code:'Z05-25d'}})
timetable_pn.addEvent('Logika dla informatyków', 'pn_3', new Date(0,0,0,'17','05'), new Date(0,0,0,'18','45'), {class:'Logika dla informatyków', data: {person:'Radosław Katarzyniak', group:'4/10', type:'C', selected:0, week:'', code:'Z05-27d'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_4', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Edward', group:'8', type:'L', selected:0, week:'np', code:'Z05-30h'}})
timetable_pn.addEvent('Podstawy programowania', 'pn_4', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'', group:'9', type:'L', selected:0, week:'p', code:'Z05-30i'}})
timetable_pn.addEvent('Organizacja sys. komputerowych', 'pn_4', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'5/10', type:'C', selected:0, week:'np', code:'Z05-32e'}})

var renderer_pn = new Timetable.Renderer(timetable_pn);
renderer_pn.draw('.pn');

var timetable_wt = new Timetable();
timetable_wt.setScope(7,19)
timetable_wt.addLocations(['wt_0', 'wt_1', 'wt_2', 'wt_3', 'wt_4', 'wt_5', 'wt_6', 'wt_7', 'wt_8', 'wt_9']);
timetable_wt.addEvent('Podstawy programowania', 'wt_0', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'1/10', type:'C', selected:0, week:'', code:'Z05-29a'}})
timetable_wt.addEvent('Logika dla informatyków', 'wt_0', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Logika dla informatyków', data: {person:'Radosław Katarzyniak', group:'5/10', type:'C', selected:0, week:'', code:'Z05-27e'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_0', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'1/2', type:'W', selected:0, week:'', code:'Z05-31a'}})
timetable_wt.addEvent('Algebra z geom. analit. A', 'wt_0', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'1/10', type:'C', selected:0, week:'', code:'Z06-56b'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_1', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'2/10', type:'C', selected:0, week:'', code:'Z05-29b'}})
timetable_wt.addEvent('Algebra z geom. analit. A', 'wt_1', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Algebra z geom. analit. A', data: {person:'', group:'2/10', type:'C', selected:0, week:'', code:'Z06-56c'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_2', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Podstawy programowania', data: {person:'Wojciech Thomas', group:'3/10', type:'C', selected:0, week:'', code:'Z05-29c'}})
timetable_wt.addEvent('Analiza matematyczna 1.1 A', 'wt_3', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'4/10', type:'C', selected:0, week:'', code:'Z06-58d'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_3', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'2/2', type:'W', selected:0, week:'', code:'Z05-31b'}})
timetable_wt.addEvent('Analiza matematyczna 1.1 A', 'wt_4', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'5/10', type:'C', selected:0, week:'', code:'Z06-58e'}})
timetable_wt.addEvent('Fizyka 1.1B', 'wt_5', new Date(0,0,0,'07','30'), new Date(0,0,0,'08','15'), {class:'Fizyka 1.1B', data: {person:'', group:'6/10', type:'C', selected:0, week:'', code:'Z05-25f'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_5', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'Wojciech Thomas', group:'6/10', type:'C', selected:0, week:'', code:'Z05-29f'}})
timetable_wt.addEvent('Fizyka 1.1B', 'wt_6', new Date(0,0,0,'08','15'), new Date(0,0,0,'09','00'), {class:'Fizyka 1.1B', data: {person:'', group:'7/10', type:'C', selected:0, week:'', code:'Z05-25g'}})
timetable_wt.addEvent('Logika dla informatyków', 'wt_6', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Logika dla informatyków', data: {person:'Grzegorz Popek', group:'7/10', type:'C', selected:0, week:'', code:'Z05-27g'}})
timetable_wt.addEvent('Analiza matematyczna 1.1 A', 'wt_7', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'8/10', type:'C', selected:0, week:'', code:'Z06-58h'}})
timetable_wt.addEvent('Analiza matematyczna 1.1 A', 'wt_8', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'9/10', type:'C', selected:0, week:'', code:'Z06-58i'}})
timetable_wt.addEvent('Analiza matematyczna 1.1 A', 'wt_9', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'10/10', type:'C', selected:0, week:'', code:'Z06-58j'}})
timetable_wt.addEvent('Podstawy programowania', 'wt_9', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Podstawy programowania', data: {person:'Wojciech Thomas', group:'10/10', type:'C', selected:0, week:'', code:'Z05-29j'}})

var renderer_wt = new Timetable.Renderer(timetable_wt);
renderer_wt.draw('.wt');

var timetable_sr = new Timetable();
timetable_sr.setScope(7,19)
timetable_sr.addLocations(['sr_0', 'sr_1', 'sr_2', 'sr_3', 'sr_4', 'sr_5', 'sr_6', 'sr_7']);
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_0', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Organizacja sys. komputerowych', data: {person:'Leszek Borzemski', group:'1/2', type:'W', selected:0, week:'', code:'Z05-33a'}})
timetable_sr.addEvent('Algebra z geom. analit. A', 'sr_0', new Date(0,0,0,'15','15'), new Date(0,0,0,'17','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'1/2', type:'W', selected:0, week:'', code:'Z06-57a'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_1', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'3/10', type:'C', selected:0, week:'np', code:'Z05-32c'}})
timetable_sr.addEvent('Algebra z geom. analit. A', 'sr_1', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'3/10', type:'C', selected:0, week:'', code:'Z06-56d'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_2', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'4/10', type:'C', selected:0, week:'p', code:'Z05-32d'}})
timetable_sr.addEvent('Algebra z geom. analit. A', 'sr_2', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'4/10', type:'C', selected:0, week:'', code:'Z06-56e'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_3', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'5/10', type:'C', selected:0, week:'', code:'Z05-29e'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_3', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'8/10', type:'C', selected:0, week:'p', code:'Z05-32h'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_4', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Organizacja sys. komputerowych', data: {person:'Leszek Borzemski', group:'2/2', type:'W', selected:0, week:'', code:'Z05-33b'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_4', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'10', type:'L', selected:0, week:'np', code:'Z05-30j'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_4', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'', group:'11', type:'L', selected:0, week:'p', code:'Z05-30k'}})
timetable_sr.addEvent('Logika dla informatyków', 'sr_4', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Logika dla informatyków', data: {person:'Ngoc Thanh Nguyen', group:'2/2', type:'W', selected:0, week:'', code:'Z05-28b'}})
timetable_sr.addEvent('Fizyka 1.1B', 'sr_4', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Fizyka 1.1B', data: {person:'Lucjan Jacak', group:'2/2', type:'W', selected:0, week:'', code:'Z05-26b'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_5', new Date(0,0,0,'07','00'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'Janusz Ratajczak', group:'7/10', type:'C', selected:0, week:'', code:'Z05-29g'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_5', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'Edward Bieleninik', group:'8/10', type:'C', selected:0, week:'', code:'Z05-29h'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_6', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'9/10', type:'C', selected:0, week:'np', code:'Z05-32i'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_7', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'r', type:'L', selected:0, week:'np', code:'Z05-30r'}})
timetable_sr.addEvent('Podstawy programowania', 'sr_7', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'s', type:'L', selected:0, week:'p', code:'Z05-30s'}})
timetable_sr.addEvent('Organizacja sys. komputerowych', 'sr_7', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Organizacja sys. komputerowych', data: {person:'Ziemowit Nowak', group:'10/10', type:'C', selected:0, week:'p', code:'Z05-32j'}})

var renderer_sr = new Timetable.Renderer(timetable_sr);
renderer_sr.draw('.sr');

var timetable_cz = new Timetable();
timetable_cz.setScope(7,19)
timetable_cz.addLocations(['cz_0', 'cz_1', 'cz_2', 'cz_3', 'cz_4', 'cz_5', 'cz_6', 'cz_7']);
timetable_cz.addEvent('Podstawy programowania', 'cz_0', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'t', type:'L', selected:0, week:'np', code:'Z05-30t'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_0', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'', group:'a', type:'L', selected:0, week:'p', code:'Z05-30a'}})
timetable_cz.addEvent('Organizacja sys. komputerowych', 'cz_0', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Organizacja sys. komputerowych', data: {person:'Adrianna Koziorkiewicz-Hetmańska', group:'1/10', type:'C', selected:0, week:'np', code:'Z05-32a'}})
timetable_cz.addEvent('Logika dla informatyków', 'cz_0', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Logika dla informatyków', data: {person:'Arkadiusz Liber', group:'1/10', type:'C', selected:0, week:'', code:'Z05-27a'}})
timetable_cz.addEvent('Fizyka 1.1B', 'cz_0', new Date(0,0,0,'17','05'), new Date(0,0,0,'18','45'), {class:'Fizyka 1.1B', data: {person:'Andrzej Radosz', group:'1/2', type:'W', selected:0, week:'', code:'Z05-26a'}})
timetable_cz.addEvent('Organizacja sys. komputerowych', 'cz_1', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Organizacja sys. komputerowych', data: {person:'Adrianna Koziorkiewicz-Hetmańska', group:'2/10', type:'C', selected:0, week:'p', code:'Z05-32b'}})
timetable_cz.addEvent('Fizyka 1.1B', 'cz_1', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','00'), {class:'Fizyka 1.1B', data: {person:'', group:'2/10', type:'C', selected:0, week:'', code:'Z05-25b'}})
timetable_cz.addEvent('Fizyka 1.1B', 'cz_2', new Date(0,0,0,'16','10'), new Date(0,0,0,'16','55'), {class:'Fizyka 1.1B', data: {person:'', group:'3/10', type:'C', selected:0, week:'', code:'Z05-25c'}})
timetable_cz.addEvent('Organizacja sys. komputerowych', 'cz_3', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Organizacja sys. komputerowych', data: {person:'Adrianna Koziorkiewicz-Hetmańska', group:'6/10', type:'C', selected:0, week:'np', code:'Z05-32f'}})
timetable_cz.addEvent('Logika dla informatyków', 'cz_3', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Logika dla informatyków', data: {person:'Andrzej Gawrych-Żukowski', group:'6/10', type:'C', selected:0, week:'', code:'Z05-27f'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_3', new Date(0,0,0,'15','15'), new Date(0,0,0,'16','55'), {class:'Algebra z geom. analit. A', data: {person:'', group:'2/2', type:'W', selected:0, week:'', code:'Z06-57b'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_3', new Date(0,0,0,'17','05'), new Date(0,0,0,'18','45'), {class:'Algebra z geom. analit. A', data: {person:'', group:'6/10', type:'C', selected:0, week:'', code:'Z06-56g'}})
timetable_cz.addEvent('Organizacja sys. komputerowych', 'cz_4', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Organizacja sys. komputerowych', data: {person:'Adrianna Koziorkiewicz-Hetmańska', group:'7/10', type:'C', selected:0, week:'p', code:'Z05-32g'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_4', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'Edward', group:'l', type:'L', selected:0, week:'np', code:'Z05-30l'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_4', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Podstawy programowania', data: {person:'', group:'m', type:'L', selected:0, week:'p', code:'Z05-30m'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_4', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'7/10', type:'C', selected:0, week:'', code:'Z06-56h'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_5', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Edward', group:'n', type:'L', selected:0, week:'np', code:'Z05-30n'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_5', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'', group:'o', type:'L', selected:0, week:'p', code:'Z05-30o'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_5', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'8/10', type:'C', selected:0, week:'', code:'Z06-56i'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_6', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'9/10', type:'C', selected:0, week:'', code:'Z06-56a'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_6', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Podstawy programowania', data: {person:'Urszula', group:'p', type:'L', selected:0, week:'np', code:'Z05-30p'}})
timetable_cz.addEvent('Podstawy programowania', 'cz_6', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Podstawy programowania', data: {person:'', group:'q', type:'L', selected:0, week:'p', code:'Z05-30q'}})
timetable_cz.addEvent('Logika dla informatyków', 'cz_6', new Date(0,0,0,'17','05'), new Date(0,0,0,'18','45'), {class:'Logika dla informatyków', data: {person:'Andrzej Gawrych-Żukowski', group:'9/10', type:'C', selected:0, week:'', code:'Z05-27i'}})
timetable_cz.addEvent('Logika dla informatyków', 'cz_7', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Logika dla informatyków', data: {person:'Grzegorz Popek', group:'10/10', type:'C', selected:0, week:'', code:'Z05-27j'}})
timetable_cz.addEvent('Algebra z geom. analit. A', 'cz_7', new Date(0,0,0,'17','05'), new Date(0,0,0,'18','45'), {class:'Algebra z geom. analit. A', data: {person:'', group:'10/10', type:'C', selected:0, week:'', code:'Z06-56j'}})

var renderer_cz = new Timetable.Renderer(timetable_cz);
renderer_cz.draw('.cz');

var timetable_pi = new Timetable();
timetable_pi.setScope(7,19)
timetable_pi.addLocations(['pi_0', 'pi_1', 'pi_2', 'pi_3', 'pi_4', 'pi_5']);
timetable_pi.addEvent('Podstawy programowania', 'pi_0', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Podstawy programowania', data: {person:'Edward Bieleninik', group:'4/10', type:'C', selected:0, week:'', code:'Z05-29d'}})
timetable_pi.addEvent('Logika dla informatyków', 'pi_0', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Logika dla informatyków', data: {person:'Zbigniew Huzar', group:'1/2', type:'W', selected:0, week:'', code:'Z05-28a'}})
timetable_pi.addEvent('Fizyka 1.1B', 'pi_1', new Date(0,0,0,'07','30'), new Date(0,0,0,'08','15'), {class:'Fizyka 1.1B', data: {person:'', group:'5/10', type:'C', selected:0, week:'', code:'Z05-25e'}})
timetable_pi.addEvent('Algebra z geom. analit. A', 'pi_1', new Date(0,0,0,'09','15'), new Date(0,0,0,'11','00'), {class:'Algebra z geom. analit. A', data: {person:'', group:'5/10', type:'C', selected:0, week:'', code:'Z06-56f'}})
timetable_pi.addEvent('Analiza matematyczna 1.1 A', 'pi_2', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'6/10', type:'C', selected:0, week:'', code:'Z06-58f'}})
timetable_pi.addEvent('Analiza matematyczna 1.1 A', 'pi_2', new Date(0,0,0,'13','15'), new Date(0,0,0,'15','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'2/2', type:'W', selected:0, week:'', code:'Z06-59b'}})
timetable_pi.addEvent('Analiza matematyczna 1.1 A', 'pi_3', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Analiza matematyczna 1.1 A', data: {person:'', group:'7/10', type:'C', selected:0, week:'', code:'Z06-58g'}})
timetable_pi.addEvent('Fizyka 1.1B', 'pi_4', new Date(0,0,0,'08','15'), new Date(0,0,0,'09','00'), {class:'Fizyka 1.1B', data: {person:'', group:'8/10', type:'C', selected:0, week:'', code:'Z05-25h'}})
timetable_pi.addEvent('Logika dla informatyków', 'pi_4', new Date(0,0,0,'11','15'), new Date(0,0,0,'13','00'), {class:'Logika dla informatyków', data: {person:'Martin Tabakow', group:'8/10', type:'C', selected:0, week:'', code:'Z05-27h'}})
timetable_pi.addEvent('Podstawy programowania', 'pi_5', new Date(0,0,0,'07','30'), new Date(0,0,0,'09','00'), {class:'Podstawy programowania', data: {person:'Edward Bieleninik', group:'9/10', type:'C', selected:0, week:'', code:'Z05-29i'}})
timetable_pi.addEvent('Fizyka 1.1B', 'pi_5', new Date(0,0,0,'11','15'), new Date(0,0,0,'12','00'), {class:'Fizyka 1.1B', data: {person:'', group:'9/10', type:'C', selected:0, week:'', code:'Z05-25i'}})
timetable_pi.addEvent('Fizyka 1.1B', 'pi_5', new Date(0,0,0,'12','15'), new Date(0,0,0,'13','00'), {class:'Fizyka 1.1B', data: {person:'', group:'10/10', type:'C', selected:0, week:'', code:'Z05-25j'}})

var renderer_pi = new Timetable.Renderer(timetable_pi);
renderer_pi.draw('.pi');
