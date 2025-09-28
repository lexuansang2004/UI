<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
    <title>Danh sách tin tức</title>
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
</head>
<body class="container mt-5">

<h2>Danh sách tin tức</h2>

<c:if test="${empty tintuc}">
    <p>Không có tin tức nào.</p>
</c:if>
<form method="get" action="${pageContext.request.contextPath}/tintuc" class="mb-4">
    <div class="input-group">
        <input type="text" name="keyword" class="form-control" placeholder="Tìm theo tiêu đề..." />
        <button type="submit" class="btn btn-outline-primary">Tìm kiếm</button>
    </div>
</form>

<c:forEach var="t" items="${tintuc}">
    <div class="card mb-3 p-3">
        <h4>${t.tieuDe}</h4>
        <p>${t.noiDung}</p>
        <p><strong>Danh mục:</strong> ${t.danhMuc.tenDM}</p>
        <a href="${t.lienKet}" target="_blank">Xem chi tiết</a> |
        <a href="${pageContext.request.contextPath}/tintuc/edit?id=${t.maTT}" class="ms-2">Sửa</a>
        <a href="tintuc/delete?id=${t.maTT}" onclick="return confirm('Xóa tin này?')">Xóa</a>
        <p><strong>Giá:</strong> ${t.gia} VNĐ</p>
        <form method="post" action="${pageContext.request.contextPath}/cart/add">
            <input type="hidden" name="maTT" value="${t.maTT}" />
            <button type="submit" class="btn btn-sm btn-warning">Thêm vào giỏ</button>
        </form>
    </div>
</c:forEach>

<a class="btn btn-primary mt-3" href="${pageContext.request.contextPath}/tintuc/form">Thêm tin tức</a>
</body>
</html>