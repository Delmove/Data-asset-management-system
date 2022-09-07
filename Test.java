public class Test implements Runnable {
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println("测试文件");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
