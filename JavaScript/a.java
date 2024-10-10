class MAin{
    public static void main(String[] args) {
        a.inner obj1 = new a().new inner();
        
    }
}
/**
 * a
 */
 class a {
class inner{
    public void show()
    {
        System.out.println("hello world");
    }
}
    
}