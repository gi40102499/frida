function frida() {
  console.log(
    "=======================",
    new Date().toISOString(),
    "======================="
  );

  console.log(Frida.version);
  console.log(Frida.heapSize); // frida堆大小
  console.log("-------附加信息-------");
  console.log(Process.id); // 进程id
  console.log(Process.arch); // 体结构??
  console.log(Process.codeSigningPolicy); // 代码签名策略
  const modules = Process.enumerateModules();
  for (const iterator of modules) {
    // 基质 模块名称 大小
    console.log(iterator.base, iterator.name, iterator.size);
  }
}
frida();

/**
 * 执行命令
 * frida [进程名] -l [需要加载的js脚本]
 * 退出
 * quit
 */
