// 初始化地图
export function initializeMap(mapContainerId) {
    const map = new AMap.Map(mapContainerId, {
        zoom: 15,
        center: [116.397428, 39.90923],  // 默认中心点
    })
    return map
}

// 使用高德API在地图上绘制用户的轨迹
export function drawPolyline(map, path) {
    new AMap.Polyline({
        path: path,
        strokeColor: "#3366FF",  // 轨迹线颜色
        strokeOpacity: 0.8,      // 透明度
        strokeWeight: 6,         // 轨迹线宽
        map: map
    })
}

// 使用高德API获取用户的实时位置并追踪轨迹
export function startLocationTracking(onLocationUpdate) {
    AMap.plugin('AMap.Geolocation', function() {
        const geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,  // 高精度定位
            timeout: 10000,            // 定位超时
            maximumAge: 0,             // 禁用缓存
            showButton: true           // 显示定位按钮
        })

        geolocation.getCurrentPosition((status, result) => {
            if (status === 'complete' && result.position) {
                const { lat, lng } = result.position
                onLocationUpdate({ lat: lat, lon: lng })  // 更新轨迹点数据
            }
        })

        geolocation.watchPosition((status, result) => {
            if (status === 'complete' && result.position) {
                const { lat, lng } = result.position
                onLocationUpdate({ lat: lat, lon: lng })  // 实时更新轨迹点
            }
        })
    })
}

// 停止高德API的位置跟踪
export function stopLocationTracking() {
    // 停止位置跟踪逻辑，可以清除监听器等
    // 这里用假定的API功能，具体可以根据需要修改
    console.log('停止位置跟踪')
}
