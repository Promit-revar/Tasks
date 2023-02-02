class HttpError extends Error{
  constructor(message){
    super(this.message);
  }
}
module.exports=HttpError;