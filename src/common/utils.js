let IOSConfig = function () {
  let userAgent = navigator.userAgent
  if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('Mac') > -1) {
    console.log('on iphone/mac')
    window.addEventListener('popstate', function (e) {
      // alert("后退");
      console.log('后退')
      self.location.reload()
    }, false)
    let state = {
      title: '',
      url: '#'
    }
    window.history.replaceState(state, '', '#')
  }
}

// 获得url中的参数,放在对象中,然后返回这个对象
function getUrlParms () {
  let args = {}
  let query = location.search.substring(1)//获取查询串
  let pairs = query.split('&')//在逗号处断开
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=')//查找name=value
    if (pos === -1) continue//如果没有找到就跳过
    let argname = pairs[i].substring(0, pos).toLowerCase()//提取name
    let value = pairs[i].substring(pos + 1)//提取value
    args[argname] = decodeURIComponent(value)//存为属性
  }
  return args
}

/**
 * 导航到指定页面
 * @param pageName
 * @param defaultUrl
 * @param paramter
 */
function goToPage (pageName, defaultUrl, paramter) {
  var theParamterArray = []
  for (var key in paramter) {
    theParamterArray.push(key + '=' + paramter[key])
  }
  location.href = defaultUrl + '?' + theParamterArray.join('&')
}

//获取窗口可视范围的高度
function getClientHeight () {
  let clientHeight = 0
  // if (document.body.clientHeight && document.documentElement.clientHeight) {
  //   debugger
  //   clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  // } else {
  //   clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  // }
  if (document.documentElement.clientHeight) {
    clientHeight = document.documentElement.clientHeight
  }
  console.log('窗口高度:', clientHeight)
  return clientHeight
}

export default { getUrlParms, IOSConfig, getClientHeight, goToPage }
