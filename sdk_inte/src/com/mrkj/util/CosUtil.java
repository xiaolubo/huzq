package com.mrkj.util;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import net.sf.json.JsonConfig;
import org.apache.commons.lang.StringUtils;
public class CosUtil {
	public static void sendStr(HttpServletResponse response, String obj)
	  {
	    try
	    {
	      PrintWriter out = response.getWriter();
	      response.setContentType("text/html;charset=UTF-8");
	      response.setCharacterEncoding("UTF-8");
	      out.println(obj);
	    } catch (IOException e) {
	      e.printStackTrace();
	    }
	  }

	  public static JsonConfig filterProperty(String[] str) {
	    JsonConfig jsonConfig = new JsonConfig();
	    jsonConfig.setIgnoreDefaultExcludes(false);
	    jsonConfig.setExcludes(str);
	    return jsonConfig;
	  }

	  public static boolean isNumeric(String str)
	  {
	    if ((str == null) || ("".equals(str))) {
	      return false;
	    }
	    for (int i = 0; i < str.length(); i++) {
	      if (!Character.isDigit(str.charAt(i))) {
	        return false;
	      }
	    }
	    return true;
	  }

	  public static String randFileName()
	  {
	    String result = "";
	    Date date = new Date();
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	    result = result + sdf.format(date);
	    Double rand = Double.valueOf(Math.random() * 10000.0D);
	    if (rand.doubleValue() < 10.0D)
	      result = result + "000" + rand.toString().substring(0, 1);
	    else if (rand.doubleValue() < 100.0D)
	      result = result + "00" + rand.toString().substring(0, 2);
	    else if (rand.doubleValue() < 1000.0D)
	      result = result + "0" + rand.toString().substring(0, 3);
	    else {
	      result = result + rand.toString().substring(0, 4);
	    }
	    return result;
	  }

	  public static String getCuttTime()
	  {
	    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    String time = df.format(new Date());
	    return time;
	  }

	  public static String getTrace(Throwable t) {
	    StringWriter stringWriter = new StringWriter();
	    PrintWriter writer = new PrintWriter(stringWriter);
	    t.printStackTrace(writer);
	    StringBuffer buffer = stringWriter.getBuffer();
	    return buffer.toString();
	  }

	  public static String judgeOperator(String imsi)
	  {
	    if (StringUtils.isEmpty(imsi)) {
	      return null;
	    }
	    String op = "";
	    if ((imsi.startsWith("46000")) || (imsi.startsWith("46002")) || 
	      (imsi.startsWith("46007")))
	      op = "移动";
	    else if ((imsi.startsWith("46001")) || (imsi.startsWith("46006")))
	      op = "联通";
	    else if ((imsi.startsWith("46003")) || (imsi.startsWith("46005")))
	      op = "电信";
	    else if (imsi.startsWith("46011"))
	      op = "电信4G";
	    else if (imsi.startsWith("46020")) {
	      op = "铁通";
	    }
	    return op;
	  }
	  
	  public static Map<String,String> JudgeProvince(String iccid){
			String provinceCode = null;
			Map<String,String> map = null;
			if(iccid!=null&&iccid.length()>13){
				map = new HashMap<String,String>();
				String yyscode=iccid.substring(4, 6); //运营商
				if(yyscode.equals("00") || yyscode.equals("02")){//移动
					map.put("operator", "1");
					provinceCode=iccid.substring(8, 10); //省编号
				}else if(yyscode.equals("01") || yyscode.equals("06") || yyscode.equals("09")){//联通
					map.put("operator", "3");
					provinceCode=iccid.substring(9, 11); //省编号
				}else if(yyscode.equals("03") || yyscode.equals("11")){//电信
					map.put("operator", "2");
					provinceCode=iccid.substring(9, 12); //市编号
					if(!provinceCode.startsWith("0")){
						provinceCode = "0"+provinceCode;
					}
				}else{
					map.put("operator", "0");
				}
				map.put("code", provinceCode);
			}
			
			return map;
		}

	  public static void main(String[] args) {
//	    System.out.print(JudgeProvince("89860110851004441279"));
		  String iccid = "898602a01252a5507137";
		  String city = iccid.substring(8,10);
//		  if(!city.startsWith("0")){
//			  city = "0"+city;
////			  System.out.print(city);
//			}
		  System.out.print(city);
	  }
}
