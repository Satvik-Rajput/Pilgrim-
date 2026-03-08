(function () {
  'use strict';

  var womanToggle = document.getElementById('womanToggle');
  if (womanToggle) {
    womanToggle.addEventListener('click', function () {
      var on = womanToggle.getAttribute('aria-checked') === 'true';
      womanToggle.setAttribute('aria-checked', on ? 'false' : 'true');
    });
  }

  var swapBtn = document.querySelector('.swap-btn');
  var fromValue = document.querySelector('.search-row .row-labels .label-value');
  var toRow = document.querySelectorAll('.search-row')[1];
  var toValue = toRow ? toRow.querySelector('.row-labels .label-value') : null;
  if (swapBtn && fromValue && toValue) {
    swapBtn.addEventListener('click', function () {
      var tmp = fromValue.textContent;
      fromValue.textContent = toValue.textContent;
      toValue.textContent = tmp;
    });
  }

  var todayBtn = document.querySelector('.pill-btn-selected');
  var tomorrowBtn = document.querySelectorAll('.pill-btn')[1];
  var dateLabel = document.querySelector('.search-row-date .label-value');
  if (todayBtn && tomorrowBtn && dateLabel) {
    todayBtn.addEventListener('click', function () {
      todayBtn.classList.add('pill-btn-selected');
      tomorrowBtn.classList.remove('pill-btn-selected');
      dateLabel.textContent = 'Sun 10-Mar';
    });
    tomorrowBtn.addEventListener('click', function () {
      tomorrowBtn.classList.add('pill-btn-selected');
      todayBtn.classList.remove('pill-btn-selected');
      dateLabel.textContent = 'Mon 11-Mar';
    });
  }
})();
