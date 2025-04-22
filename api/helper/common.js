import moment from 'moment'

const getMomentObject = (date, format = "DD-MM-YYYY") => moment(date, format);

const getDefaultMessage = () => ({
  title: "Admin Title",
  body: "Admin Body",
  background_img: `${process.env.BASE_URL}/message/default/qr_code.png`,
  is_admin: true
});

export { getMomentObject, getDefaultMessage };
