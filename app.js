(function () {
  "use strict";

  // Chuyển chuỗi ngày trực tiếp, tránh lệch ngày do múi giờ.
  function formatDate(value) {
    const [year, month, day] = value.split("-");
    return `${Number(day)}/${month}/${year}`;
  }

  function addLine(parent, text, className) {
    const line = document.createElement("p");
    if (className) line.className = className;
    line.textContent = text;
    parent.appendChild(line);
  }

  function renderSchedule(data) {
    document.title = data.title;
    document.getElementById("page-title").textContent = data.title;
    document.getElementById("academic-year").textContent = `Năm học: ${data.academicYear}`;
    const list = document.getElementById("course-list");
    const fragment = document.createDocumentFragment();

    [...data.courses].sort((a, b) => a.displayOrder - b.displayOrder).forEach((course) => {
      const article = document.createElement("article");
      article.className = "course";
      const headingId = `subject-${course.id}`;
      article.setAttribute("aria-labelledby", headingId);
      addLine(article, `Học kỳ: ${data.semester}`);
      const heading = document.createElement("h3");
      heading.id = headingId;
      heading.textContent = `${course.subjectName} - ${course.subjectCode}`;
      article.appendChild(heading);
      addLine(article, `Số tín chỉ: ${Number(course.credits).toFixed(1)}`);
      addLine(article, `Thời gian học: ${formatDate(course.startDate)} - ${formatDate(course.endDate)}`);
      addLine(article, course.dayOfWeek === 8 ? "Thứ: Chủ nhật" : `Thứ: ${course.dayOfWeek}`);
      addLine(article, `Tiết: ${course.startPeriod}-${course.endPeriod}`);
      addLine(article, `Phòng: ${course.room}`);
      addLine(article, `Giảng viên: ${course.lecturer}`);
      fragment.appendChild(article);
    });
    list.replaceChildren(fragment);
  }

  // Trang v1 chỉ có một màn hình: mũi tên đưa người xem về đầu lịch.
  document.getElementById("back-button").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  if (window.TIMETABLE_DATA) {
    renderSchedule(window.TIMETABLE_DATA);
  } else {
    document.getElementById("course-list").textContent = "Không tải được lịch học. Vui lòng tải lại trang.";
  }
})();
