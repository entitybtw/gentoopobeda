  function updateYearLine() {
    const currentYear = new Date().getFullYear();
    document.getElementById('yearLine').textContent = `${currentYear} ЭТО ОЧЕРЕДНОЙ ГОД ГЕНТУ ПОБЕДЫ`;
    
    document.getElementById('explanation').textContent = 
      `Почему ${currentYear} это очередной год генту победы?`;
  }

  const startDate = new Date('2002-03-31T00:00:00Z').getTime();
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;

  function updateTimerLine() {
    const now = Date.now();
    const diffMs = now - startDate;
    const years = diffMs / msInYear;
    document.getElementById('timerLine').textContent = `ГЕНТУ ПОБЕДА УЖЕ ${years.toFixed(14)} лет`;
  }
  
  updateYearLine();
  updateTimerLine();
  setInterval(updateTimerLine, 10);
