const tooltipTriggers = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;
let activeTrigger = null;

function removeActiveTooltip() {
  if (activeTooltip) {
    activeTooltip.remove();
    activeTooltip = null;
    activeTrigger = null;
  }
}

function createTooltip(trigger, text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip tooltip_active';
  tooltip.textContent = text;

  const rect = trigger.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  tooltip.style.position = 'absolute';
  tooltip.style.top = (rect.bottom + scrollTop) + 'px';
  tooltip.style.left = (rect.left + scrollLeft) + 'px';

  document.body.appendChild(tooltip);
  return tooltip;
}

function onTooltipClick(event) {
  event.preventDefault();

  const currentTrigger = event.currentTarget;
  const tooltipText = currentTrigger.getAttribute('title');

  if (activeTrigger === currentTrigger && activeTooltip) {
    removeActiveTooltip();
    return;
  }

  removeActiveTooltip();
  activeTooltip = createTooltip(currentTrigger, tooltipText);
  activeTrigger = currentTrigger;
}

tooltipTriggers.forEach(trigger => {
  trigger.addEventListener('click', onTooltipClick);
});