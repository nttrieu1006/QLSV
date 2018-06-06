define({ "api": [
  {
    "type": "Get",
    "url": "/GiaoVien/Danhsach",
    "title": "",
    "group": "GIAOVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaGV: \"GV001\",\n     HoTen: \"Nguyễn Văn A\",\n     NTNS: \"1990\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/GiaoVienController.cs",
    "groupTitle": "GIAOVIEN",
    "name": "GetGiaovienDanhsach"
  },
  {
    "type": "Get",
    "url": "/GiaoVien/GVTheoId/:id",
    "title": "",
    "group": "GIAOVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaGV: \"GV001\",\n     HoTen: \"Nguyễn Văn A\",\n     NTNS: \"1990\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy giáo viên\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/GiaoVienController.cs",
    "groupTitle": "GIAOVIEN",
    "name": "GetGiaovienGvtheoidId"
  },
  {
    "type": "Post",
    "url": "/GiaoVien/TaoMoi",
    "title": "",
    "group": "GIAOVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên mới</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     MaGV: \"GV002\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1988\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của giáo viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên vửa tạo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:2,\n     MaGV: \"GV002\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1988\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Mã giáo viên không được để trống\",\n  \"error\": \"Họ tên giáo viên không được để trống\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/GiaoVienController.cs",
    "groupTitle": "GIAOVIEN",
    "name": "PostGiaovienTaomoi"
  },
  {
    "type": "Put",
    "url": "/GiaoVien/Sua",
    "title": "",
    "group": "GIAOVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của giáo viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên cần sửa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     Id : 2\n     MaGV: \"GV003\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1988\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của giáo viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaGV",
            "description": "<p>Mã của giáo viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của giáo viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của giáo viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TrinhDo",
            "description": "<p>Trình độ học vấn của giáo viên vửa sửa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:2,\n     MaGV: \"GV003\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1988\",\n     TrinhDo: \"Tiến Sĩ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy giáo viên\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/GiaoVienController.cs",
    "groupTitle": "GIAOVIEN",
    "name": "PutGiaovienSua"
  },
  {
    "type": "Get",
    "url": "/Lop/Danhsach",
    "title": "",
    "group": "LOP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaLop: \"Lop001\",\n     TenLop: \"14ABC01\",\n     SiSo: 40,\n     GVChuNhiem: 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/LopController.cs",
    "groupTitle": "LOP",
    "name": "GetLopDanhsach"
  },
  {
    "type": "Get",
    "url": "/Lop/LopTheoId/:id",
    "title": "",
    "group": "LOP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaLop: \"Lop001\",\n     TenLop: \"14ABC01\",\n     SiSo: 40,\n     GVChuNhiem: 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy lớp\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/LopController.cs",
    "groupTitle": "LOP",
    "name": "GetLopLoptheoidId"
  },
  {
    "type": "Post",
    "url": "/LOP/TaoMoi",
    "title": "",
    "group": "LOP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp mới</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp mới</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp mới</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     MaLop: \"Lop002\",\n     TenLop: \"15ABC02\",\n     SiSo: 44,\n     GVChuNhiem: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp vừa tạo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:2,\n     MaLop: \"Lop002\",\n     TenLop: \"15ABC02\",\n     SiSo: 44,\n     GVChuNhiem: 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Mã lớp là trường bắt buộc\",\n  \"error\": \"Tên lớp là trường bắt buộc\",\n  \"error\" : \"Không tìm thấy giáo viên\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/LopController.cs",
    "groupTitle": "LOP",
    "name": "PostLopTaomoi"
  },
  {
    "type": "Put",
    "url": "/Lop/Sua",
    "title": "",
    "group": "LOP",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp cần sửa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     Id:2,\n     MaLop: \"Lop002\",\n     TenLop: \"15ABC02\",\n     SiSo: 44,\n     GVChuNhiem: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp vừa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaLop",
            "description": "<p>Mã của lớp vừa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "TenLop",
            "description": "<p>Tên của lớp vừa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "SiSo",
            "description": "<p>Sĩ số của lớp vừa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "GVChuNhiem",
            "description": "<p>Id Giáo viên chủ nhiệm của lớp vừa sửa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:2,\n     MaLop: \"Lop002\",\n     TenLop: \"15ABC02\",\n     SiSo: 44,\n     GVChuNhiem: 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy giáo viên\",\n  \"error\": \"Không tìm thấy lớp\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/LopController.cs",
    "groupTitle": "LOP",
    "name": "PutLopSua"
  },
  {
    "type": "Get",
    "url": "/SinhVien/Danhsach",
    "title": "",
    "group": "SINHVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Lop",
            "description": "<p>Tên lớp sinh viên đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaGV: \"SV001\",\n     HoTen: \"Nguyễn Văn A\",\n     NTNS: \"1996\",\n     Lop: \"14ABC01\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/SinhVienController.cs",
    "groupTitle": "SINHVIEN",
    "name": "GetSinhvienDanhsach"
  },
  {
    "type": "Get",
    "url": "/SinhVien/SVTheoId/:id",
    "title": "",
    "group": "SINHVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Lop",
            "description": "<p>Tên lớp sinh viên đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:1,\n     MaSV: \"GV001\",\n     HoTen: \"Nguyễn Văn A\",\n     NTNS: \"1990\",\n     Lop: \"14ABC01\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy sinh viên\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/SinhVienController.cs",
    "groupTitle": "SINHVIEN",
    "name": "GetSinhvienSvtheoidId"
  },
  {
    "type": "Post",
    "url": "/SinhVien/TaoMoi",
    "title": "",
    "group": "SINHVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên mới</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Lop",
            "description": "<p>Id của lớp sinh viên mới đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     MaSV: \"SV002\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1998\",\n     Lop: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của sinh viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên vửa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Lop",
            "description": "<p>Id của lớp sinh viên vửa tạo đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id:2,\n     MaSV: \"SV002\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1998\",\n     Lop: 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Mã sinh viên không được để trống\",\n  \"error\": \"Họ tên sinh viên không được để trống\",\n  \"error\": \"Lớp không tồn tại\"    \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/SinhVienController.cs",
    "groupTitle": "SINHVIEN",
    "name": "PostSinhvienTaomoi"
  },
  {
    "type": "Put",
    "url": "/SinhVien/Sua",
    "title": "",
    "group": "SINHVIEN",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id cúa sinh viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên cần sửa</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "Lop",
            "description": "<p>Id của lớp sinh viên cần sửa đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n     Id : 2\n     MaSV: \"SV003\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1998\",\n     Lop: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của sinh viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MaSV",
            "description": "<p>Mã của sinh viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "HoTen",
            "description": "<p>Họ tên của sinh viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "NTNS",
            "description": "<p>Ngày tháng năm sinh của sinh viên vửa sửa</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "Lop",
            "description": "<p>Id của lớp sinh viên vửa sửa đang học</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response: ",
          "content": "{\n     Id : 2\n     MaSV: \"SV003\",\n     HoTen: \"Nguyễn Văn B\",\n     NTNS: \"1998\",\n     Lop: 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "string",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy sinh viên\",\n  \"error\": \"Lớp không tồn tại\"     \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/SinhVienController.cs",
    "groupTitle": "SINHVIEN",
    "name": "PutSinhvienSua"
  }
] });
