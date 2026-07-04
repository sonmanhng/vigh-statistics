// 1. Thông tin chung về khóa học
const courseInfo = {
    title: "Statistics for Scientific Research",
    subtitle: "Khóa học Thống kê Ứng dụng & Khoa học Dữ liệu",
    instructor: "Nguyen Manh Son",
    term: "Học kỳ I, 2026",
    time: "Thứ 3 & Thứ 5, 09:00 - 11:00",
    location: "Online / VIGH Lab",
    description: "Trang web lưu trữ tài liệu, bài giảng và bài tập môn Thống kê dành cho học viên VIGH. Tập trung vào xác suất, thống kê suy diễn và mô hình học máy ứng dụng trong nghiên cứu khoa học."
};

// 2. Thông báo mới nhất (Announcements)
const courseAnnouncements = [
    {
        date: "04/07/2026",
        content: "Chào mừng các bạn đến với khóa học Thống kê. Bài giảng Chương 1 đã được upload."
    },
    {
        date: "01/07/2026",
        content: "Vui lòng cài đặt phần mềm R và RStudio trước buổi học đầu tiên."
    }
];

// 3. Thông tin giảng viên & Trợ giảng (Staff)
const courseStaff = [
    {
        role: "Instructor",
        name: "Nguyen Manh Son",
        email: "sonnm@vigh.vn",
        officeHours: "Thứ 6, 14:00 - 16:00 (Hẹn trước)"
    }
];

// 4. Danh sách các bài giảng và tài liệu (Syllabus)
const courseModules = [
    {
        id: "module-1",
        title: "Chương 1: Mở đầu về Thống kê & Phân tích Dữ liệu",
        description: "Khái niệm cơ bản về dữ liệu, quần thể, mẫu và các loại biến số.",
        isPublished: true,
        resources: [
            { type: "video", title: "Video Bài giảng", url: "#" },
            { type: "pdf", title: "Slide Bài giảng", url: "#" }
        ]
    },
    {
        id: "module-2",
        title: "Chương 2: Thống kê Mô tả",
        description: "Các đại lượng đo lường trung tâm, độ phân tán và hình dáng phân phối.",
        isPublished: true,
        resources: [
            { type: "pdf", title: "Tài liệu Đọc thêm", url: "#" },
            { type: "assignment", title: "Bài tập Chương 2", url: "#" }
        ]
    },
    {
        id: "module-3",
        title: "Chương 3: Xác suất cơ bản",
        description: "Lý thuyết xác suất, biến ngẫu nhiên và các phân phối xác suất quan trọng.",
        isPublished: false, 
        resources: []
    }
];
