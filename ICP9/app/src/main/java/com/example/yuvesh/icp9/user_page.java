package com.example.yuvesh.icp9;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.Editable;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.content.Intent;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.TextView;
import android.widget.Toast;

/**
 * Created by Yuvesh on 6/28/2018.
 */

public class user_page extends AppCompatActivity {
    private static final String MAIN_ACTIVITY_TAG = "MainActivity";
    final int Pizza_PRICE = 5;
    final int CREAM_PRICE = 1;
    final int Chiken_PRICE = 3;
    final int Cheese_PRICE = 2;


    int quantity = 1;

    private static Button logout;
    private static EditText name1;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_page);
        name1 = (EditText) findViewById(R.id.user_input);
        Editable name= name1.getText();


    }

    public void logout (View v) {

        Intent intent = new Intent(user_page.this, MainActivity.class);
        startActivity(intent);
    }
    boolean hasCream, hasCheese,hasChicken;



    public void submitOrder(View view) {

       /* Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse("geo:47.6,-122.3"));
        if (intent.resolveActivity(getPackageManager()) !=null){
            startActivity(intent);
        }*/

//        get user input
        EditText userInputNameView = (EditText) findViewById(R.id.user_input);
        String userInputName = userInputNameView.getText().toString();
//        check if whipped cream is selected
        CheckBox Cream = (CheckBox) findViewById(R.id.cream);
         hasCream = Cream.isChecked();
        //        check if chocolate is selected
        CheckBox chicken = (CheckBox) findViewById(R.id.checkBox4);
         hasChicken = chicken.isChecked();

        CheckBox cheese = (CheckBox) findViewById(R.id.cheese);
         hasCheese = cheese.isChecked();
//        calculate and store the total price
        float totalPrice = calculatePrice(hasCream, hasChicken, hasCheese);
//        create and store the order summary
        String orderSummaryMessage = createOrderSummary(userInputName, hasCream, hasChicken, hasCheese, totalPrice);

        if (Cream.isChecked() || chicken.isChecked() || cheese.isChecked()) {
            Log.d("QAOD", "Topping is Selected");
        } else {
            Toast.makeText(getApplicationContext(), "Please select Gender", Toast.LENGTH_SHORT).show();
            Log.d("QAOD", "No Topping is selected");
        }

    }
// Write the relevant code for making the buttons work(i.e impelement the implicit and explicit intents









    private String boolToString(boolean bool){
        return bool?(getString(R.string.yes)):(getString(R.string.no));

    }

    private String createOrderSummary(String userInputName, boolean hasCream, boolean hasChicken,boolean hasCheese , float price) {
        String orderSummaryMessage = getString(R.string.order_summary_name,userInputName) +"\n"+
                getString(R.string.order_summary_cream,boolToString(hasCream))+"\n"+
                getString(R.string.order_summary_chicken,boolToString(hasChicken)) +"\n"+
                getString(R.string.order_summary_cheese,boolToString(hasCheese)) +"\n"+
                getString(R.string.order_summary_quantity) +"\n"+
                getString(R.string.order_summary_total_price,price) +"\n"+


                getString(R.string.thank_you);
        return orderSummaryMessage;

    }


    /**
     * Method to calculate the total price
     *
     * @return total Price
     */
    float total_price=calculatePrice(hasCream,hasChicken,hasCheese);
    private float calculatePrice(boolean hasCream, boolean hasChicken,boolean hascheese) {
        int basePrice = Pizza_PRICE;
        if (hasCream) {
            basePrice += CREAM_PRICE;
        }
        if (hasChicken) {
            basePrice += Chiken_PRICE;
        }
        if (hascheese) {
            basePrice += Cheese_PRICE;
        }


        return quantity * basePrice;

    }

    /**
     * This method displays the given quantity value on the screen.
     */
    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_text_view);
        quantityTextView.setText("" + number);

    }


    /**
     * This method increments the quantity of coffee cups by one
     *
     * @param view on passes the view that we are working with to the method
     */

    public void increment(View view) {
        if (quantity < 10) {
            quantity = quantity + 1;
            display(quantity);
        } else {

            Log.i("MainActivity", "Please select less than one hundred cups of coffee");
            Context context = getApplicationContext();
            String lowerLimitToast = getString(R.string.too_much_coffee);
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, lowerLimitToast, duration);
            toast.show();
            return;

        }
    }

    public void sendSummary(android.view.View v){
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("plain/text");
        intent.putExtra(Intent.EXTRA_EMAIL, new String[] { "shalin@gmail.com" });
        intent.putExtra(Intent.EXTRA_SUBJECT, "Order Summary");
        intent.putExtra(Intent.EXTRA_TEXT, createOrderSummary(String.valueOf(name1.getText()),hasCheese,hasChicken,hasCream,total_price));
        startActivity(Intent.createChooser(intent, ""));
    }



    public void decrement(View view) {
    }
}