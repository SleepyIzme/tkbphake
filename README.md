# Thời khoá biểu — v1

Website HTML/CSS/JavaScript thuần, dữ liệu cố định theo ảnh nội dung học kỳ 2. Giao diện thanh đỏ, nền sáng theo ảnh mẫu. Không cần npm, build, Firebase hoặc backend.

## Các file

| File | Vai trò |
| --- | --- |
| `index.html` | Khung trang và cấu hình hiển thị trên iPhone |
| `styles.css` | Màu sắc, font, kích thước, khoảng cách, vùng an toàn iPhone |
| `data.js` | Toàn bộ nội dung lịch cố định |
| `app.js` | Hiển thị danh sách môn từ dữ liệu |
| `manifest.webmanifest` | Cấu hình mở web ở chế độ standalone |
| `assets/` | Biểu tượng website / Màn hình chính |
| `.nojekyll` | Phục vụ file tĩnh trên GitHub Pages |

## Xem trên máy tính

Giải nén rồi mở `index.html` bằng trình duyệt. Lịch không dùng fetch hoặc module nên mở file trực tiếp được. Muốn kiểm tra manifest qua HTTP, mở terminal tại thư mục này và chạy `python -m http.server 8000`, sau đó truy cập http://localhost:8000.

## Đưa lên GitHub Pages

1. Tạo repository GitHub (chọn Public nếu dùng GitHub Free).
2. Upload **các file bên trong thư mục `thoi-khoa-bieu-v1`** lên thư mục gốc repository. `index.html` phải ở ngay thư mục gốc, không nằm trong thư mục v1 lồng bên trong. Có thể bỏ README khi upload, nhưng giữ toàn bộ assets và file chạy web. Không upload file ZIP thay cho mã nguồn.
3. Commit vào nhánh `main`.
4. Vào **Settings → Pages → Build and deployment**.
5. Source: **Deploy from a branch**. Branch: **main**, Folder: **/(root)** → Save.
6. Chờ deployment hoàn tất, mở địa chỉ GitHub Pages được hiển thị.

Các đường dẫn đều tương đối (`./`), dùng được cả địa chỉ có tên repository và domain riêng. Khi có domain, cấu hình **Custom domain** trong Settings → Pages và DNS theo hướng dẫn GitHub; bật Enforce HTTPS khi chứng chỉ sẵn sàng. Chưa kèm CNAME vì chưa có domain cụ thể.

## Chụp màn hình trên iPhone 12

1. Mở URL đã deploy bằng Safari.
2. Chọn Chia sẻ → Thêm vào Màn hình chính (Add to Home Screen). Nếu có lựa chọn Open as Web App, bật lựa chọn đó.
3. Mở lại bằng biểu tượng Lịch học trên Màn hình chính; chế độ standalone giúp bỏ thanh địa chỉ trình duyệt.
4. Đưa trang về đầu rồi bấm nút sườn + tăng âm lượng để chụp màn hình.

Trang đã dùng safe-area cho tai thỏ và vùng home indicator. Không vẽ giả giờ, pin, Dynamic Island hay thanh home; các vùng hệ thống phụ thuộc iPhone và phiên bản iOS. Bản v1 không có service worker và không cam kết chạy offline sau khi cài. Trên desktop, nội dung giới hạn rộng 430px; trên điện thoại dùng toàn bộ chiều rộng. Dòng dài được xuống hàng, không cắt tên môn. Mũi tên trên thanh đỏ đưa trang về đầu lịch vì v1 chỉ có một trang.

## Sửa dữ liệu cố định

Mở `data.js`, chỉnh đối tượng `window.TIMETABLE_DATA`, lưu và push lại lên GitHub. Sau deployment, tải lại trang để lấy phiên bản mới.

- `academicYear`: đang đặt `2026-2027` theo thời gian học 06/10/2026–23/01/2027. Ảnh giao diện mẫu là 2025–2026; có thể đổi trường này nếu muốn.
- `semester`: đang là `2`.
- `courses`: ba môn theo ảnh nội dung, gồm mã môn, tín chỉ, ngày, thứ, tiết, phòng, giảng viên.
- `startDate`, `endDate`: chuỗi `YYYY-MM-DD`.
- `dayOfWeek`: 2–7; 8 là Chủ nhật.
- `displayOrder`: thứ tự hiển thị tăng dần.
- `id`: duy nhất cho mỗi môn; khi thêm môn dùng course04, course05…

Giữ dấu phẩy, ngoặc và dấu nháy đúng cú pháp JavaScript. Font mặc định ưu tiên font hệ thống Apple trên iPhone. Nếu cần điều chỉnh sát hơn trên máy thực tế, sửa biến màu và các thông số trong `styles.css`.

## Phạm vi v1 và bước chuyển v2

V1 chỉ xem lịch cố định; chưa có tài khoản, form sửa hoặc đồng bộ database. Dữ liệu công khai trong mã nguồn. V2 có thể thay dữ liệu từ `data.js` bằng dữ liệu Firestore và bổ sung Firebase Authentication, Security Rules, giao diện sửa; không cần đổi kiểu bố cục hiện tại.

## Tài liệu tham khảo

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Domain riêng: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Manifest standalone: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display
