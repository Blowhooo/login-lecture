'use strict';

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["testyjh1", "testyjh2", "testyjh3"],
  psword : ['1234', "5678", "9101"]
};

const process = {
  login : (req, res) => {
    const id = req.body.id,
          psword = req.body.psword;

    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword){
        return res.json({
          "success" : true,
        })
      }
    }

    return res.json({
      "success" : false,
      "msg" : "로그인에 실패하셨습니다.",
    })
  }
};

module.exports = {
  output,
  process
};