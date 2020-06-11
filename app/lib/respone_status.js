class Response {
  Success(status = 200, responeText = 'success', data) {
    return {
      status: status,
      responeText: responeText,
      success: true,
      data
    }
  }

  Fail(status = 404, responeText = 'fail', data = null) {
    return {
      status,
      responeText,
      success: false
    }
  }
}

module.exports = new Response()