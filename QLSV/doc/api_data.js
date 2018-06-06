define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_My_PC_Desktop_QLSV_QLSV_doc_main_js",
    "groupTitle": "C__Users_My_PC_Desktop_QLSV_QLSV_doc_main_js",
    "name": ""
  },
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Không tìm thấy giáo viên\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Controllers/GiaoVienController.cs",
    "groupTitle": "GIAOVIEN",
    "name": "PutGiaovienSua"
  }
] });