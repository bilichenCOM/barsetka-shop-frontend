export class APIEndpoints {
	public static BASE = 'http://localhost:8080/api';

	public static CATEGORIES = APIEndpoints.BASE + '/categories';
	public static PRODUCTS = APIEndpoints.BASE + '/products';
	public static CITIES = APIEndpoints.BASE + '/cities';
  public static DELIVERIES = APIEndpoints.BASE + '/deliveries';
  public static AUTH = APIEndpoints.BASE + '/signin';
  public static LOGOUT = APIEndpoints.BASE + '/logout';
}
