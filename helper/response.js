const response = {
  success: (res, data, message) => {
    const result = {
      responseCode: 200,
      responseDesc: message,
      responseData: data,
    };

    res.json(result);
  },
  successAndCount: (res, data, count, page, message) => {
    const result = {
      responseCode: 200,
      responseDesc: message,
      totalData: count,
      totalPage: page,
      responseData: data,
    };

    res.json(result);
  },
  failed: (res, data, message) => {
    const result = {
      responseCode: 400,
      responseDesc: message,
      responseData: data,
    };

    res.json(result);
  },
  successMeta: (res, data, message, meta) => {
    const result = {
      message,
      success: true,
      meta,
      data,
    };

    res.json(result);
  },
  successLogin: (res, data, desc) => {
    const result = {
      responseCode: 200,
      responseDesc: desc,
      responseData: data,
    };

    res.json(result);
  },
  errLogin: (res, desc) => {
    const result = {
      responseCode: 400,
      responseDesc: desc,
      responseData: null,
    };

    res.json(result);
  },
  // middleware
};

module.exports = response;