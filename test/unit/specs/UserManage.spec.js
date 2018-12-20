//测试用户管理vue组件
import Vue from 'vue'
import UserManage from '@/components/UserManage'

describe('UserManage', function () {
  const Constructor = Vue.extend(UserManage);
  const vm = new Constructor().$mount();
  it('UserManage is a vue instance', ()=>{

    expect(vm.$el.querySelector('#userMg').textContent).toEqual("用户管理");
    expect(vm.$el.querySelector('.test-class').textContent).toEqual("用户信息:");

  });

  //创建点击事件
  // const clickEvent = new window.Event('click');
  //
  // it('should be 0', function () {
  //   const userNameBtn =  vm.$el.querySelector('input[name="userName"]');
  //
  //   console.log(userNameBtn);
  //   //出发按钮点击事件
  //   let result = userNameBtn.dispatchEvent(clickEvent);
  //   console.log('======result:', result);
  //   //需要手动监听更新
  //   vm._watcher.run();
  //   expect(result === -1).toEqual(true);
  //
  // });
});
