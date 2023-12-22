function VoucherCreate() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center fw-bold"> Thêm voucher mới</h3>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="col-md-8">
            <label className="form-label">
              Mã voucher
              <span className="text-danger">(*)</span>
            </label>
            <input className="form-control" name="name" />
          </div>
          <div className="col-md-8">
            <label className="form-label">
              Giảm giá
              <span className="text-danger">(*)</span>
            </label>
            <div class="input-group">
              <span
                class="input-group-text"
                style={{
                  fontSize: "10px",
                }}
              >
                %
              </span>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="col-md-8">
            <label className="form-label">Khoản thời gian diễn ra</label>
            <div className="row">
              <div className="col-lg-6">
                <input className="form-control" type="date" />
              </div>
              <div className="col-lg-6">
                <input className="form-control" type="date" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <label>Tình trạng</label>
            <select className="form-select">
              <option></option>
            </select>
          </div>

          <button className="btn btn-success my-2">Lưu</button>
        </div>
      </div>
    </>
  );
}

export default VoucherCreate;
