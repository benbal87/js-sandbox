'use strict';

let str = 'éáűőúüóöí';

let strStripped = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();

strStripped;
