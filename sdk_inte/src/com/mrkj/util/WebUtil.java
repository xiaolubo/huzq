package com.mrkj.util;

import java.io.BufferedReader;  
import java.io.FileInputStream;  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.InputStreamReader;  
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;  
import java.net.URL;  
import java.util.logging.Level;  
import java.util.logging.Logger; 

import org.apache.commons.lang.StringUtils;

import net.sf.json.JSONObject;

public class WebUtil {
	public static String ConvertToString(InputStream inputStream) throws UnsupportedEncodingException{  
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream,"GB2312");  
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);  
        StringBuilder result = new StringBuilder();  
        String line = null;  
        try {  
            while((line = bufferedReader.readLine()) != null){  
                result.append(line + "\n");  
            }  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            try{  
                inputStreamReader.close();  
                inputStream.close();  
                bufferedReader.close();  
            }catch(IOException e){  
                e.printStackTrace();  
            }  
        }  
        return result.toString();  
    }  
	
	public static String ConvertToString(FileInputStream inputStream){  
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);  
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);  
        StringBuilder result = new StringBuilder();  
        String line = null;  
        try {  
            while((line = bufferedReader.readLine()) != null){  
                result.append(line + "\n");  
            }  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            try{  
                inputStreamReader.close();  
                inputStream.close();  
                bufferedReader.close();  
            }catch(IOException e){  
                e.printStackTrace();  
            }  
        }  
        return result.toString();  
    }  

	
	public static String getProvince(String tel){
		String returnstr = null;
		if(!CosUtil.isNumeric(tel)){
			return returnstr;
		}
		 try{  
			    if(tel.startsWith("86")){
			    	tel = tel.substring(2);
			    }
	            URL url = new URL("https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel="+tel);  
	            HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();  
	            urlConnection.setRequestMethod("GET");  
	            urlConnection.connect();  
	            InputStream inputStream = urlConnection.getInputStream();  
	            //Convert Stream to String  
	            String responseStr = ConvertToString(inputStream);  
	            if(StringUtils.isEmpty(responseStr)){
	            	return returnstr;
	            }
	            responseStr = responseStr.substring(responseStr.indexOf("=")+1).trim();
	            if(StringUtils.isEmpty(responseStr) || !(responseStr.contains("{") && responseStr.contains("}"))){
	            	return returnstr;
	            }
	            JSONObject o = JSONObject.fromObject(responseStr);
	            if(o != null && o.containsKey("province")){
	            	returnstr =  o.getString("province");
	            }
//	            System.out.println(o.getString("province"));  
	        }catch(IOException e){  
	            Logger.getLogger(WebUtil.class.getName()).log(Level.SEVERE, null, e);  
	        }  
	        return returnstr;
	}
	
	 public static void main(String[] args) {  
		 System.out.println(getProvince("15850781443"));  
	      
	    }  
}
