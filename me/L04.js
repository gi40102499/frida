function frida() {
    console.log("=======================", new Date().toISOString(), "=======================");
    console.log(Frida.version);
    console.log(Frida.heapSize); // frida堆大小
    console.log("-------附加信息-------");
    console.log(Process.id); // 进程id
    console.log(Process.arch); // 体结构??
    console.log(Process.codeSigningPolicy); // 代码签名策略
    var modules = Process.enumerateModules();
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var iterator = modules_1[_i];
        // 基质 模块名称 大小
        console.log(iterator.base, iterator.name, iterator.size);
    }
}
frida();
/**
 * 执行命令
 * frida [进程名] -l [需要加载的js脚本]
 */
