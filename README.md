# VIGH Statistics Course

Trang web tĩnh lưu trữ tài liệu khóa học Thống kê (Statistics) của viện VIGH.

## Cấu trúc thư mục
- `index.html`: Giao diện chính của trang.
- `data/course-data.js`: **[QUAN TRỌNG] Nơi duy nhất bạn cần thao tác để cập nhật nội dung.**
- `css/style.css`: File định dạng giao diện.
- `js/main.js`: Mã xử lý hiển thị tự động.

## Cách cập nhật nội dung khóa học (Upload bài mới)
Bạn KHÔNG cần viết HTML. Chỉ cần mở file `data/course-data.js` và làm theo hướng dẫn:

1. Để sửa Lời giới thiệu/Tên giảng viên: Sửa các biến trong mục `courseInfo`.
2. Để thêm 1 bài giảng mới: Thêm 1 block mới vào mảng `courseModules`.
   Ví dụ block mẫu:
   ```javascript
   {
       id: "module-4",
       title: "Chương 4: Phân tích hồi quy",
       description: "Hồi quy tuyến tính và logistic.",
       isPublished: true, // Chuyển thành false nếu chưa muốn học viên nhìn thấy
       resources: [
           { type: "video", title: "Video Bài giảng", url: "https://youtube.com/..." },
           { type: "pdf", title: "Tài liệu Đọc", url: "https://statics.sonnm.site/chuong4.pdf" }
       ]
   }
   ```
*(Lưu ý dấu phẩy `,` giữa các block)*

## Hướng dẫn đưa lên GitHub và chạy web tĩnh
1. Mở Terminal / CMD tại thư mục `vigh-statistics`.
2. Chạy lệnh tạo git: `git init`
3. Thêm tất cả file: `git add .`
4. Commit: `git commit -m "Khởi tạo website khóa học Thống kê"`
5. Link với Repo của bạn trên GitHub (nhớ copy đường dẫn repo bạn vừa tạo):
   `git remote add origin https://github.com/sonmanhng/vigh-statistics.git`
6. Đẩy code lên: `git push -u origin main`

Sau đó, truy cập Cloudflare Pages và chọn Repo này để deploy tự động!
