/* V1: dữ liệu cố định theo ảnh nội dung. Chỉ cần sửa file này để đổi lịch.
 * Ngày lưu YYYY-MM-DD; dayOfWeek: 2–7, 8 = Chủ nhật.
 * academicYear được chọn theo khoảng ngày học 10/2026–01/2027.
 * V2 có thể thay nguồn dữ liệu bằng Firestore mà giữ nguyên cấu trúc này.
 */
window.TIMETABLE_DATA = {
  title: "Thời khoá biểu",
  academicYear: "2026-2027",
  semester: 2,
  courses: [
    {
      id: "course01",
      subjectName: "Toán cao cấp/ Đại số bậc học",
      subjectCode: "ITE 1211",
      credits: 3,
      startDate: "2026-10-06",
      endDate: "2027-01-23",
      dayOfWeek: 3,
      startPeriod: 2,
      endPeriod: 5,
      room: "ĐHKT - P506 E4",
      lecturer: "Nguyễn Trung Hiếu",
      displayOrder: 1
    },
    {
      id: "course02",
      subjectName: "Lịch sử văn minh thế giới từ năm 1500",
      subjectCode: "ITE 1255",
      credits: 3,
      startDate: "2026-10-06",
      endDate: "2027-01-23",
      dayOfWeek: 6,
      startPeriod: 2,
      endPeriod: 5,
      room: "ĐHKT - P306 E5",
      lecturer: "PGS.TS Phạm Văn Thuỳ",
      displayOrder: 2
    },
    {
      id: "course03",
      subjectName: "Khám phá mỹ thuật",
      subjectCode: "ARTD 205",
      credits: 3,
      startDate: "2026-10-06",
      endDate: "2027-01-23",
      dayOfWeek: 6,
      startPeriod: 6,
      endPeriod: 8,
      room: "ĐHKT - P405 E4",
      lecturer: "Vũ Hồng Thai",
      displayOrder: 3
    }
  ]
};
