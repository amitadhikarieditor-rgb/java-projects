public class Main{
    public static void main(String[]args){
        //dsa with java patterns approach
        for(int i=10; i>=1; i--){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i=1; i<=10;i++){
            for (int j=1;j<=10;j++){
                if(i==1||i==10|| j==1||j==10){
                System.out.print("*");
                }else{
                    System.out.print(" ");
                }

            }
            System.out.println();

        }
        for(int i=1;i<=10;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        //leet code two pointers question 
        int i=0;
        int j=num.length-1;

        while(i<j){
            int resSum=num[i]+num[j];
            if(resSum==target){
                System.out.print((i+1)+" "+(j+1)); //leetcode asks for 1 indexed answer
            }else if(resSum<target){
                i++;
            }else{
                j--;
            }
        }
        
    }
}



