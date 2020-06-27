const submitBtn = document.querySelector("#submitBtn");
const user = document.querySelector("#user");
const addUser = document.querySelector("#addUser");
const text = [];
const userList = [];

addUser.addEventListener("click", function (e) {
  const userName = user.value;
  AddFunc(userName);

  user.value = "";
});

submitBtn.addEventListener("click", function (e) {
  console.log(userList);
});

function AddFunc(config) {
  const data = `${config}님 안녕하십니까? 채용 담당자입니다.
  서류전형 결과 전달 드립니다. 안타깝게 이번 모집에서는 귀하를
  모실 수 없게 되었습니다. 총 5명 지원해 주셨고
  이중 5명만이 면접 대상자로 선정 되었습니다. ${config}님께서 부족해서가 아니라 더 많은 분들을 모시지 못한 당사의 잘못이며 더욱 성장하여 많은 분들을 모실 수 있도록 노력하겠습니다. 저희 회사에 관심 가져주시고
  귀중한 시간으로 지원해주셔서 감사합니다. ${config}님의 앞날에 행복이 가득하시길 기원합니다.`;
  userList.push(data);
}
