export const modules = [
  {
    id: 'english',
    title: 'English Round',
    icon: '🔵',
    badge: 'Round 1',
    color: '#6366f1',
    sections: [
      {
        title: '🎤 Self Introduction — Công thức 3M',
        content: `🔹 M1 — MÌNH LÀ AI? (Who I am)
Hi, my name is Nam. I recently graduated and I have a strong passion for backend development, especially with Java and Spring Boot.

🔹 M2 — MÌNH BIẾT GÌ? (What I know)
During my studies, I built a project called EchoVerse — a full-stack music platform where users can discover, listen to, and interact with music.

I was responsible for:
• Backend: Spring Boot + PostgreSQL + JWT Authentication
• Frontend: React with responsive UI
• Real-time: WebSocket messaging & Firebase notifications
• Special feature: Music recognition by melody and humming

Tech stack: Java 17, Spring Boot 3, Spring Security, PostgreSQL, Firebase, WebSocket, React, Git

🔹 M3 — MÌNH MUỐN GÌ? (What I want)
I'm looking for an opportunity to grow as a Java developer at FPT Software — where I can contribute to real enterprise projects, learn from experienced engineers, and build a long-term career in software development.`,
        tip: '💡 Công thức 3M: Mình là ai → Mình biết gì → Mình muốn gì. Nói rõ ràng, tự tin, khoảng 1-2 phút!',
        warning: 'Không nói quá dài (>2 phút). Không liệt kê quá nhiều tech — chỉ nói cái MÌNH THỰC SỰ DÙNG!'
      },
      {
        title: '🎤 Script giới thiệu BACKUP — Tiếng Việt (Dự phòng)',
        content: `"Xin chào anh/chị, em tên là Nam. Em vừa tốt nghiệp và em rất đam mê phát triển backend với Java và Spring Boot.

Trong quá trình học, em đã xây dựng một dự án tên là EchoVerse — nền tảng nghe nhạc và tương tác xã hội. Em là developer chính, phụ trách cả backend và frontend.

🔹 Backend: Em sử dụng Java 17 với Spring Boot 3, Spring Security kết hợp JWT để xác thực, và PostgreSQL làm database. Em thiết kế RESTful API theo kiến trúc 3 tầng: Controller → Service → Repository.

🔹 Real-time: Em implement WebSocket cho tính năng chat và Firebase Cloud Messaging cho push notification.

🔹 Frontend: Em dùng React để xây dựng giao diện responsive. Tính năng đặc biệt nhất là nhận diện bài hát — người dùng có thể tìm nhạc bằng cách ngâm giai điệu.

🔹 Tools: Em quản lý code bằng Git, viết API docs bằng Swagger, và test bằng Postman.

Em mong muốn được phát triển sự nghiệp Java developer tại FPT Software — nơi em có thể làm việc trên các dự án enterprise thực tế, học hỏi từ các anh chị có kinh nghiệm, và xây dựng career path lâu dài.

Cảm ơn anh/chị đã lắng nghe."`,
        tip: 'Bản tiếng Việt dùng khi phỏng vấn vòng kỹ thuật (Round 2/3). Vẫn giữ cấu trúc 3M!',
        warning: 'Nếu phỏng vấn tiếng Việt: vẫn nên xen kẽ thuật ngữ tiếng Anh (Spring Boot, JWT, REST API...) — cho thấy bạn quen với tech vocabulary.'
      },
      {
        title: '🎵 EchoVerse — Project Showcase',
        content: `EchoVerse Music Platform — A full-stack music streaming and social platform.`,
        table: {
          headers: ['Aspect', 'Details'],
          rows: [
            ['Backend', 'Java 17, Spring Boot 3, Spring Security, JWT'],
            ['Frontend', 'React, Vite, Responsive UI'],
            ['Database', 'PostgreSQL, Spring Data JPA, Hibernate'],
            ['Real-time', 'WebSocket (chat, notifications), Firebase Cloud Messaging'],
            ['Features', 'Music recognition (melody/humming), playlist, search, like/comment'],
            ['Auth', 'JWT token-based authentication, role-based access control'],
            ['Architecture', 'RESTful API, MVC pattern, layered architecture'],
            ['Tools', 'Git, Swagger API docs, Postman testing'],
          ]
        },
        tip: 'Khi được hỏi "Tell me about your project" → dùng bảng này để kể có cấu trúc!'
      },
      {
        title: '💪 Strength / Weakness',
        items: [
          { q: 'Strength', a: 'Fast learner — I learned Spring Boot and built EchoVerse from scratch in a short time. I have strong logical thinking and take responsibility for my work. I also enjoy solving complex problems like implementing real-time features.' },
          { q: 'Weakness', a: 'I don\'t have much real-world enterprise experience yet, but I\'ve been actively building personal projects like EchoVerse and studying best practices to bridge that gap.' }
        ],
        warning: 'Đừng nói weakness "chết người" như: lười, không chịu áp lực...'
      },
      {
        title: '🏢 Why FPT?',
        content: `1. Strong training program for freshers — perfect for someone like me who wants to grow quickly
2. Global projects with international clients → enterprise exposure with real-world scale
3. Clear long-term career path — from fresher to senior developer
4. Culture of learning and knowledge sharing`
      },
      {
        title: '🌏 US or JP environment?',
        content: `"I'm open to both. US focuses on agile and innovation, 
JP emphasizes quality and documentation. Both are valuable. 
I'm flexible and ready to adapt."`,
        tip: 'Trả lời "Open to both" là AN TOÀN nhất!'
      },
      {
        title: '☕ Why Java?',
        content: `- Stable, mature language for enterprise backend
- Strong ecosystem: Spring Boot, Hibernate, Spring Security
- Huge community and job market
- Used in banking, e-commerce, telecom
- I used Java to build EchoVerse and really enjoyed the development experience`
      },
      {
        title: '🗣️ Common Follow-up Questions',
        items: [
          { q: 'What challenges did you face in EchoVerse?', a: 'The most challenging part was implementing real-time messaging with WebSocket — handling connection management, message ordering, and ensuring reliability. I solved it by studying the Spring WebSocket documentation and implementing proper error handling.' },
          { q: 'How did you manage the database?', a: 'I used PostgreSQL with Spring Data JPA. I designed the schema with proper relationships (users, songs, playlists, comments), used indexes for frequently queried columns, and wrote custom queries with JPQL when needed.' },
          { q: 'Did you work in a team?', a: 'I worked on the project as the main developer, but I used Git for version control and followed agile-like practices — breaking features into small tasks and iterating.' },
          { q: 'What would you improve?', a: 'I would add caching with Redis for frequently accessed data, implement CI/CD pipeline, and add more comprehensive unit testing with JUnit and Mockito.' }
        ]
      }
    ]
  },
  {
    id: 'oop',
    title: 'OOP',
    icon: '🧱',
    badge: 'Core',
    color: '#10b981',
    sections: [
      {
        title: '🔒 Encapsulation (Đóng gói)',
        content: 'Ẩn dữ liệu bên trong class bằng private, truy cập qua getter/setter → kiểm soát, validate.',
        code: `private String name;
public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
        example: 'Tài khoản ngân hàng: balance là private, rút tiền qua withdraw() có validate số dư.'
      },
      {
        title: '🔗 Inheritance (Kế thừa)',
        content: 'Class con thừa hưởng thuộc tính/method từ class cha. Từ khóa: extends.',
        code: `class Animal { void eat() {} }
class Dog extends Animal { void bark() {} }
// Dog có cả eat() (từ cha) và bark() (riêng)`,
        warning: 'Java chỉ đơn kế thừa — 1 class chỉ extends 1 class!'
      },
      {
        title: '🎭 Polymorphism (Đa hình)',
        content: 'Cùng method, hành vi khác nhau.',
        code: `// Overloading (compile-time): cùng tên, khác tham số
int add(int a, int b) { ... }
double add(double a, double b) { ... }

// Overriding (runtime): class con ghi đè method cha
class Animal { void sound() { print("..."); } }
class Dog extends Animal { void sound() { print("Gâu!"); } }

Animal a = new Dog();
a.sound(); // → "Gâu!" (gọi method của object thực tế)`,
        tip: 'Runtime polymorphism: gọi method dựa trên OBJECT THỰC TẾ, không phải kiểu biến.'
      },
      {
        title: '🎨 Abstraction (Trừu tượng)',
        content: 'Ẩn chi tiết, chỉ hiện chức năng. Dùng abstract class hoặc interface.',
        code: `abstract class Shape {
    abstract double area(); // Không có body
}
class Circle extends Shape {
    double area() { return Math.PI * r * r; } // Implement cụ thể
}`
      },
      {
        title: '⚔️ Interface vs Abstract Class',
        table: {
          headers: ['Tiêu chí', 'Abstract Class', 'Interface'],
          rows: [
            ['Kế thừa', 'extends 1 class', 'implements nhiều'],
            ['Constructor', '✅ Có', '❌ Không'],
            ['Method', 'Abstract + có body', 'Abstract (Java 8+: default)'],
            ['Biến', 'Mọi loại', 'Chỉ public static final'],
            ['Khi nào?', 'IS-A + share code', 'Định nghĩa contract/behavior']
          ]
        },
        answer: 'Abstract class khi các class con có code chung cần kế thừa. Interface khi muốn định nghĩa hành vi mà nhiều class không liên quan có thể implement.'
      }
    ],
    qa: [
      { q: '4 tính chất OOP?', a: 'Encapsulation (đóng gói), Inheritance (kế thừa), Polymorphism (đa hình), Abstraction (trừu tượng)' },
      { q: 'Overloading vs Overriding?', a: 'Overloading: cùng tên, khác tham số (compile-time). Overriding: class con ghi đè method cha (runtime).' },
      { q: 'Tại sao Java không đa kế thừa class?', a: 'Tránh Diamond Problem — 2 class cha có cùng method, class con không biết dùng method nào.' },
      { q: 'Khi nào dùng Abstract Class, khi nào dùng Interface?', a: 'Abstract class: khi có code chung cần chia sẻ (IS-A). Interface: khi định nghĩa hành vi/contract cho nhiều class không liên quan.' },
      { q: 'Composition vs Inheritance?', a: 'Composition (HAS-A): chứa object khác bên trong. Inheritance (IS-A): kế thừa. Composition linh hoạt hơn, giảm coupling.' },
      { q: 'SOLID principles?', a: 'S: Single Responsibility. O: Open/Closed. L: Liskov Substitution. I: Interface Segregation. D: Dependency Inversion.' },
      { q: 'Tính đa hình runtime hoạt động thế nào?', a: 'JVM dùng dynamic dispatch — tại runtime xác định method nào được gọi dựa trên kiểu object THỰC TẾ (new Dog()), không phải kiểu biến (Animal a).' },
      { q: 'Constructor có thể override không?', a: 'Không! Constructor không phải method, không được kế thừa → không override. Nhưng class con có thể gọi super() để gọi constructor cha.' }
    ]
  },
  {
    id: 'java-keywords',
    title: 'final / static / equals',
    icon: '🔑',
    badge: 'Core',
    color: '#f59e0b',
    sections: [
      {
        title: '📌 final keyword',
        table: {
          headers: ['Dùng với', 'Ý nghĩa'],
          rows: [
            ['final variable', 'Không thể gán lại giá trị'],
            ['final method', 'Không thể override'],
            ['final class', 'Không thể extends (VD: String)'],
          ]
        },
        warning: 'final object: reference không đổi, nhưng NỘI DUNG object vẫn có thể thay đổi!'
      },
      {
        title: '⚡ static keyword',
        content: 'Thuộc về CLASS, không thuộc instance. Dùng chung cho mọi object.',
        code: `static int count = 0;          // Biến chung
static void helper() {}        // Gọi qua ClassName.helper()
static final double PI = 3.14; // HẰNG SỐ`,
        tip: 'static method KHÔNG thể truy cập non-static field.'
      },
      {
        title: '⚖️ == vs equals() vs hashCode()',
        table: {
          headers: ['', '==', 'equals()'],
          rows: [
            ['So sánh', 'Reference (địa chỉ)', 'Content (nội dung)'],
            ['Primitive', 'So sánh giá trị', 'N/A'],
            ['Object', 'Cùng reference?', 'Cùng nội dung? (phải override)'],
          ]
        },
        code: `String s1 = "hello";
String s2 = "hello";
String s3 = new String("hello");

s1 == s2       // true  (String Pool → cùng reference)
s1 == s3       // false (khác reference)
s1.equals(s3)  // true  (cùng nội dung)`,
        warning: 'Override equals() → PHẢI override hashCode()! HashMap/HashSet dùng hashCode tìm bucket.'
      }
    ],
    qa: [
      { q: '== vs equals() khác nhau?', a: '== so sánh reference (địa chỉ). equals() so sánh content (nội dung, phải override).' },
      { q: 'Tại sao override hashCode khi override equals?', a: 'HashMap dùng hashCode() tìm bucket, equals() xác nhận. Nếu không override hashCode, 2 object equals nhưng khác hashCode → HashSet coi là khác nhau.' },
      { q: 'String immutable nghĩa là gì?', a: 'Không thể thay đổi sau khi tạo. Vì security, thread-safe, String Pool caching, hashCode caching.' },
      { q: 'String vs StringBuilder vs StringBuffer?', a: 'String: immutable. StringBuilder: mutable, nhanh, không thread-safe. StringBuffer: mutable, thread-safe (synchronized), chậm hơn.' },
      { q: 'String Pool là gì?', a: 'Vùng nhớ đặc biệt trong Heap lưu String literal. "hello" tạo trong Pool, new String("hello") tạo ngoài Pool.' },
      { q: 'final, finally, finalize khác nhau?', a: 'final: hằng số/không override/không extends. finally: luôn chạy sau try-catch. finalize(): GC gọi trước khi xóa object (deprecated Java 9+).' },
      { q: 'Wrapper class là gì? Autoboxing?', a: 'Wrapper: Integer, Double... bọc primitive thành object. Autoboxing: tự chuyển int → Integer. Unboxing: ngược lại.' },
      { q: 'Access modifier có mấy loại?', a: 'private (chỉ trong class), default (cùng package), protected (cùng package + subclass), public (mọi nơi).' }
    ]
  },
  {
    id: 'exception',
    title: 'Exception',
    icon: '⚠️',
    badge: 'Core',
    color: '#ef4444',
    sections: [
      {
        title: '🔴 Checked vs Unchecked',
        table: {
          headers: ['', 'Checked', 'Unchecked'],
          rows: [
            ['Khi nào', 'Compile-time', 'Runtime'],
            ['Bắt buộc?', '✅ try-catch hoặc throws', '❌ Không'],
            ['Ví dụ', 'IOException, SQLException', 'NullPointerException, ArrayIndex'],
            ['Ý nghĩa', 'Lỗi có thể dự đoán', 'Bug code'],
          ]
        }
      },
      {
        title: '🛡️ try-catch-finally',
        code: `try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Lỗi: " + e.getMessage());
} finally {
    System.out.println("LUÔN chạy"); // Đóng resource
}`,
        tip: 'finally luôn chạy (trừ System.exit). Nếu cả catch và finally có return → finally thắng.'
      },
      {
        title: '♻️ try-with-resources (Java 7+)',
        code: `// Tự động đóng resource khi xong try
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
} // br.close() TỰ ĐỘNG gọi!
// Resource phải implement AutoCloseable`,
        answer: 'Dùng try-with-resources thay vì finally để đóng resource — ngắn gọn, an toàn hơn.'
      }
    ],
    qa: [
      { q: 'Checked vs Unchecked?', a: 'Checked: compile-time, bắt buộc xử lý (IOException). Unchecked: runtime, không bắt buộc (NullPointerException).' },
      { q: 'Error vs Exception?', a: 'Error: lỗi hệ thống không nên catch (OutOfMemoryError). Exception: lỗi có thể xử lý.' },
      { q: 'throw vs throws?', a: 'throw: ném exception trong method body. throws: khai báo exception trên method signature.' },
      { q: 'try-with-resources là gì?', a: 'Tự động đóng resource khi xong try block. Resource phải implement AutoCloseable.' },
      { q: 'Custom exception tạo thế nào?', a: 'Tạo class extends Exception (checked) hoặc extends RuntimeException (unchecked). Thêm constructor nhận message.' },
      { q: 'Có nên catch Exception chung không?', a: 'Không nên! Catch cụ thể (IOException, SQLException...) để xử lý chính xác. Catch chung có thể nuốt lỗi quan trọng.' },
      { q: 'finally có chạy khi có return trong try?', a: 'Có! finally LUÔN chạy (trừ System.exit()). Nếu cả try và finally có return → finally thắng.' },
      { q: 'NullPointerException phòng tránh thế nào?', a: 'Dùng Optional (Java 8+), kiểm tra null trước khi dùng, dùng Objects.requireNonNull(), annotation @NonNull.' }
    ]
  },
  {
    id: 'collection',
    title: 'Collection',
    icon: '📦',
    badge: 'Core',
    color: '#06b6d4',
    sections: [
      {
        title: '📋 List vs Set',
        table: {
          headers: ['', 'List', 'Set'],
          rows: [
            ['Trùng lặp', '✅ Cho phép', '❌ Không'],
            ['Thứ tự', '✅ Có', 'Tùy loại'],
            ['VD', 'ArrayList, LinkedList', 'HashSet, TreeSet']
          ]
        }
      },
      {
        title: '🗺️ HashMap ⭐ (CHẮC CHẮN HỎI)',
        content: 'Key-Value pairs. Truy cập O(1) trung bình. Không đảm bảo thứ tự. Cho phép 1 null key.',
        code: `Map<String, Integer> map = new HashMap<>();
map.put("Java", 1995);
map.get("Java"); // 1995`,
        answer: 'HashMap dùng hashCode() tìm bucket index, equals() tìm entry trong bucket. Trung bình O(1). Java 8: bucket chuyển LinkedList → Red-Black Tree khi ≥ 8 entries.',
        tip: 'Bên trong: Array of buckets. hashCode() → bucket index → equals() → entry.'
      },
      {
        title: '📊 ArrayList vs LinkedList',
        table: {
          headers: ['', 'ArrayList', 'LinkedList'],
          rows: [
            ['Cấu trúc', 'Mảng động', 'DSLK đôi'],
            ['get(i)', 'O(1) ✅', 'O(n)'],
            ['add đầu', 'O(n)', 'O(1) ✅'],
            ['Khi nào?', 'Đọc nhiều', 'Thêm/xóa đầu nhiều'],
          ]
        }
      }
    ],
    qa: [
      { q: 'HashMap hoạt động thế nào?', a: 'hashCode() → tìm bucket → equals() kiểm tra trùng. O(1) avg. Java 8+: LinkedList → Red-Black Tree khi bucket ≥ 8.' },
      { q: 'ArrayList vs LinkedList?', a: 'ArrayList: mảng động, get O(1), add đầu O(n). LinkedList: DSLK đôi, get O(n), add đầu O(1).' },
      { q: 'ConcurrentModificationException?', a: 'Xảy ra khi sửa collection trong khi đang duyệt for-each. Dùng Iterator.remove() hoặc removeIf() để tránh.' },
      { q: 'HashMap vs Hashtable?', a: 'HashMap: cho phép null key, không synchronized, nhanh. Hashtable: không null, synchronized, chậm. Thay Hashtable bằng ConcurrentHashMap.' },
      { q: 'HashSet hoạt động thế nào?', a: 'HashSet bên trong dùng HashMap! Phần tử được lưu làm KEY, value là dummy object PRESENT.' },
      { q: 'TreeMap vs HashMap?', a: 'HashMap: O(1), không sắp xếp. TreeMap: O(log n), sắp xếp theo key (dùng Red-Black Tree).' },
      { q: 'Comparable vs Comparator?', a: 'Comparable: class tự implement compareTo() — sắp xếp tự nhiên. Comparator: tạo class riêng compare() — sắp xếp tùy chỉnh.' },
      { q: 'Collections.unmodifiableList() vs List.of()?', a: 'Cả hai tạo list không sửa được. Nhưng unmodifiableList chỉ wrap, list gốc vẫn sửa được. List.of() (Java 9+) tạo truly immutable.' }
    ]
  },
  {
    id: 'stream',
    title: 'Stream API',
    icon: '🌊',
    badge: 'Java 8+',
    color: '#a855f7',
    sections: [
      {
        title: '🔄 Stream Pipeline',
        code: `List<String> names = List.of("An", "Binh", "Cuong", "An");

List<String> result = names.stream()
    .filter(n -> n.length() > 2)    // Lọc
    .map(String::toUpperCase)        // Chuyển đổi
    .distinct()                      // Loại trùng
    .sorted()                        // Sắp xếp
    .collect(Collectors.toList());   // Thu kết quả`,
        tip: 'Stream KHÔNG thay đổi collection gốc! Lazy evaluation: chỉ chạy khi gặp terminal operation (collect, forEach, count...).'
      },
      {
        title: '🧩 Key Operations',
        table: {
          headers: ['Operation', 'Loại', 'Mô tả'],
          rows: [
            ['filter()', 'Intermediate', 'Lọc phần tử theo điều kiện'],
            ['map()', 'Intermediate', 'Chuyển đổi phần tử'],
            ['distinct()', 'Intermediate', 'Loại trùng'],
            ['sorted()', 'Intermediate', 'Sắp xếp'],
            ['collect()', 'Terminal', 'Thu thập kết quả'],
            ['forEach()', 'Terminal', 'Duyệt từng phần tử'],
            ['count()', 'Terminal', 'Đếm'],
            ['reduce()', 'Terminal', 'Tính tổng/gộp'],
          ]
        }
      }
    ],
    qa: [
      { q: 'Stream API là gì?', a: 'Xử lý collection theo pipeline: source → intermediate ops (filter, map) → terminal op (collect). Không thay đổi collection gốc.' },
      { q: 'Intermediate vs Terminal?', a: 'Intermediate: trả stream mới, lazy. Terminal: kích hoạt pipeline, trả kết quả cuối.' },
      { q: 'Lazy evaluation nghĩa là gì?', a: 'Intermediate ops KHÔNG chạy ngay — chỉ chạy khi gặp terminal op (collect, forEach...). Tiết kiệm tài nguyên.' },
      { q: 'map() vs flatMap()?', a: 'map(): 1 phần tử → 1 phần tử. flatMap(): 1 phần tử → nhiều phần tử (flatten nested collections).' },
      { q: 'Optional là gì?', a: 'Container có thể chứa hoặc không chứa giá trị. Tránh NullPointerException. Dùng: Optional.of(), orElse(), ifPresent().' },
      { q: 'Lambda expression là gì?', a: 'Hàm ẩn danh (anonymous function). Cú pháp: (params) -> body. Dùng với Functional Interface (1 abstract method).' },
      { q: 'Cho ví dụ Stream thực tế?', a: 'Lọc user active, map thành tên, sắp xếp, thu thành list: users.stream().filter(u -> u.isActive()).map(User::getName).sorted().collect(Collectors.toList())' }
    ]
  },
  {
    id: 'spring',
    title: 'Spring / Spring Boot',
    icon: '🌱',
    badge: 'Framework',
    color: '#10b981',
    sections: [
      {
        title: '⚡ Spring vs Spring Boot',
        table: {
          headers: ['', 'Spring', 'Spring Boot'],
          rows: [
            ['Cấu hình', 'Thủ công (XML/Java)', 'Auto Configuration'],
            ['Server', 'Cài riêng Tomcat', 'Embedded Tomcat'],
            ['Dependencies', 'Tự chọn từng cái', 'Starter gom sẵn'],
            ['Chạy', 'Deploy WAR', 'Chạy JAR trực tiếp'],
          ]
        },
        answer: 'Spring Boot build trên Spring, thêm auto-configuration, embedded server, và starter dependencies để giảm boilerplate config.'
      },
      {
        title: '🔄 IoC / DI ⭐',
        content: 'IoC: Thay vì class tự new dependency → Spring Container tạo và quản lý.\nDI: Container inject dependency vào class.',
        code: `@Service
public class UserService {
    private final UserRepository repo; // final → immutable
    
    // Constructor Injection — Spring tự inject
    // BEST PRACTICE: immutable, fail fast, dễ test
    public UserService(UserRepository repo) {
        this.repo = repo;
    }
}`,
        tip: 'Constructor Injection là best practice! Vì: immutable (final), fail fast, dễ mock test.'
      },
      {
        title: '🏷️ Annotation Quan Trọng',
        table: {
          headers: ['Annotation', 'Ý nghĩa'],
          rows: [
            ['@Component', 'Đánh dấu class là Bean (tổng quát)'],
            ['@Service', 'Bean tầng service (business logic)'],
            ['@Repository', 'Bean tầng data access + exception translation'],
            ['@Autowired', 'Inject dependency'],
            ['@Controller', 'MVC Controller (trả view)'],
            ['@RestController', '= @Controller + @ResponseBody (trả JSON)'],
            ['@SpringBootApplication', '= @Configuration + @EnableAutoConfig + @ComponentScan'],
          ]
        }
      },
      {
        title: '🌐 REST API — HTTP Methods',
        table: {
          headers: ['Method', 'Mục đích', 'Ví dụ', 'Idempotent?'],
          rows: [
            ['GET', 'Lấy dữ liệu', 'GET /api/users', '✅ Có'],
            ['POST', 'Tạo mới', 'POST /api/users + body', '❌ Không'],
            ['PUT', 'Cập nhật toàn bộ', 'PUT /api/users/1 + body', '✅ Có'],
            ['PATCH', 'Cập nhật 1 phần', 'PATCH /api/users/1 + body', '✅ Có'],
            ['DELETE', 'Xóa', 'DELETE /api/users/1', '✅ Có'],
          ]
        },
        tip: 'REST là Stateless: Server không lưu trạng thái client. Dữ liệu truyền bằng JSON. Idempotent = gọi nhiều lần kết quả giống nhau.'
      },
      {
        title: '🎯 Controller — Ví dụ đầy đủ ⭐',
        code: `@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    // Constructor Injection
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /api/users
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAll() {
        return ResponseEntity.ok(userService.findAll());
    }

    // GET /api/users/1
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    // POST /api/users  +  JSON body
    @PostMapping
    public ResponseEntity<UserDTO> create(@Valid @RequestBody CreateUserRequest req) {
        UserDTO created = userService.create(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // PUT /api/users/1  +  JSON body
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Long id,
                                          @Valid @RequestBody UpdateUserRequest req) {
        return ResponseEntity.ok(userService.update(id, req));
    }

    // DELETE /api/users/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();  // 204
    }
}`,
        answer: '@GetMapping, @PostMapping, @PutMapping, @DeleteMapping → map HTTP method. @PathVariable lấy từ URL. @RequestBody lấy JSON body. @Valid validate input.',
        tip: 'Luôn dùng ResponseEntity để kiểm soát status code!'
      },
      {
        title: '📊 HTTP Status Code quan trọng',
        table: {
          headers: ['Code', 'Tên', 'Khi nào dùng'],
          rows: [
            ['200', 'OK', 'GET/PUT thành công'],
            ['201', 'Created', 'POST tạo mới thành công'],
            ['204', 'No Content', 'DELETE thành công, không trả body'],
            ['400', 'Bad Request', 'Request sai format, validation fail'],
            ['401', 'Unauthorized', 'Chưa đăng nhập / token hết hạn'],
            ['403', 'Forbidden', 'Đã login nhưng không có quyền'],
            ['404', 'Not Found', 'Resource không tồn tại'],
            ['500', 'Internal Server Error', 'Lỗi server'],
          ]
        }
      },
      {
        title: '🔄 Bean Lifecycle ⭐',
        content: 'Vòng đời của một Spring Bean từ khi tạo đến khi bị hủy:',
        code: `// 1. Instantiate → Spring tạo object
// 2. Populate Properties → Inject dependencies (DI)
// 3. @PostConstruct → Chạy sau khi inject xong
// 4. Ready to use → Bean sẵn sàng
// 5. @PreDestroy → Chạy trước khi container shutdown

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {  // Step 2: DI
        this.repo = repo;
    }

    @PostConstruct
    public void init() {
        System.out.println("Bean đã sẵn sàng!"); // Step 3
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("Bean sắp bị hủy!"); // Step 5
    }
}`,
        tip: 'Bean scope mặc định = singleton (1 instance duy nhất). Dùng @Scope("prototype") để tạo mới mỗi lần inject.'
      },
      {
        title: '🛡️ Spring Security + JWT cơ bản',
        content: `Authentication (Xác thực): Bạn là AI? → Login, JWT token
Authorization (Phân quyền): Bạn được làm gì? → Role (ADMIN, USER)`,
        code: `// Flow JWT Authentication:
// 1. Client gửi POST /api/auth/login {username, password}
// 2. Server verify → tạo JWT token → trả về client
// 3. Client gửi token trong Header mỗi request:
//    Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
// 4. Server verify token → cho phép/từ chối

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            );
        return http.build();
    }
}`,
        warning: 'JWT stateless — server KHÔNG lưu session. Token chứa thông tin user, có expiration time.'
      },
      {
        title: '⚠️ Exception Handling — @ControllerAdvice',
        code: `// Xử lý exception tập trung cho toàn bộ controller
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        String msg = ex.getBindingResult().getFieldErrors().stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.joining(", "));
        return ResponseEntity.badRequest().body(new ErrorResponse(400, msg));
    }
}`,
        answer: '@ControllerAdvice bắt exception từ MỌI controller. Trả error response JSON thống nhất. Client luôn nhận được format giống nhau.',
        tip: 'Tạo custom exception class: class ResourceNotFoundException extends RuntimeException { ... }'
      },
      {
        title: '📐 Layered Architecture — 3 tầng',
        content: `Controller → Service → Repository → Database

• Controller: nhận request, validate, trả response
• Service: business logic, transaction
• Repository: truy vấn database (Spring Data JPA)`,
        code: `// Repository — tầng data access
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByStatus(Status status);

    @Query("SELECT u FROM User u WHERE u.salary > :min")
    List<User> findHighSalary(@Param("min") Double min);
}

// Service — tầng business logic
@Service
@Transactional
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) { this.repo = repo; }

    public UserDTO findById(Long id) {
        User user = repo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found: " + id));
        return mapToDTO(user);
    }
}`,
        tip: 'Controller KHÔNG nên chứa business logic! Chỉ gọi service. Service KHÔNG nên biết về HttpRequest!'
      }
    ],
    qa: [
      { q: 'Spring vs Spring Boot?', a: 'Spring Boot = Spring + Auto Config + Embedded Server + Starter. Giảm boilerplate config.' },
      { q: 'IoC là gì?', a: 'Inversion of Control: Container tạo và quản lý object thay vì class tự new.' },
      { q: 'DI có mấy loại?', a: '3 loại: Constructor (best), Setter, Field. Constructor vì immutable, fail fast, dễ test.' },
      { q: '@RestController vs @Controller?', a: '@RestController = @Controller + @ResponseBody. Trả JSON thay vì view.' },
      { q: '@SpringBootApplication gồm gì?', a: '@Configuration + @EnableAutoConfiguration + @ComponentScan.' },
      { q: 'Bean lifecycle?', a: 'Instantiate → Populate Properties (DI) → BeanNameAware → BeanFactoryAware → PreInit (PostConstruct) → InitializingBean → Custom init → Ready → PreDestroy → DisposableBean → Destroyed.' },
      { q: 'Bean scope có mấy loại?', a: 'singleton (mặc định, 1 instance), prototype (mỗi lần request tạo mới), request, session, application (web scope).' },
      { q: '@RequestBody vs @RequestParam vs @PathVariable?', a: '@RequestBody: JSON body → object. @RequestParam: query string (?name=x). @PathVariable: URL path (/users/{id}).' },
      { q: '@Transactional hoạt động thế nào?', a: 'Spring tạo proxy, bắt đầu transaction trước method, commit khi thành công, rollback khi exception. Mặc định rollback RuntimeException.' },
      { q: 'ResponseEntity dùng làm gì?', a: 'Trả response có status code, headers, và body tùy chỉnh. VD: ResponseEntity.ok(data), ResponseEntity.status(201).body(data).' },
      { q: 'Spring Security cơ bản?', a: 'Authentication (xác thực ai) + Authorization (phân quyền). Dùng JWT token-based cho REST API. Filter chain xử lý request.' },
      { q: '@Valid dùng làm gì?', a: 'Validate request body tự động. Kết hợp với @NotNull, @Size, @Email... trên entity fields. Trả 400 nếu invalid.' },
      { q: 'Exception handling trong Spring?', a: '@ControllerAdvice + @ExceptionHandler: xử lý exception tập trung, trả error response JSON thống nhất cho client.' }
    ]
  },
  {
    id: 'sql',
    title: 'SQL',
    icon: '🗄️',
    badge: 'Round 3',
    color: '#ec4899',
    sections: [
      {
        title: '🔗 JOIN (KINH ĐIỂN) ⭐⭐',
        content: `JOIN dùng để nối 2 bảng dựa trên cột chung (thường là Foreign Key).`,
        code: `-- Bảng employees:          Bảng departments:
-- | id | name  | dept_id |  | id | dept_name |
-- | 1  | Nam   | 10      |  | 10 | IT        |
-- | 2  | Linh  | 20      |  | 20 | HR        |
-- | 3  | Minh  | NULL    |  | 30 | Finance   |

-- INNER JOIN: Chỉ lấy dòng KHỚP ở CẢ 2 bảng
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;
-- Kết quả: Nam-IT, Linh-HR  (Minh bị loại vì dept_id = NULL)

-- LEFT JOIN: TẤT CẢ bảng trái + khớp bảng phải
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
-- Kết quả: Nam-IT, Linh-HR, Minh-NULL  (giữ Minh!)

-- RIGHT JOIN: TẤT CẢ bảng phải + khớp bảng trái
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
-- Kết quả: Nam-IT, Linh-HR, NULL-Finance  (giữ Finance!)

-- FULL OUTER JOIN: TẤT CẢ cả 2 bảng
-- Kết quả: Nam-IT, Linh-HR, Minh-NULL, NULL-Finance`,
        codeLang: 'sql',
        tip: 'Mẹo nhớ: LEFT giữ hết bảng TRÁI. RIGHT giữ hết bảng PHẢI. INNER chỉ giữ khớp.'
      },
      {
        title: '📋 Thứ tự thực thi SQL ⭐',
        content: `Thứ tự VIẾT vs thứ tự THỰC THI khác nhau!`,
        table: {
          headers: ['Thứ tự thực thi', 'Keyword', 'Ý nghĩa'],
          rows: [
            ['1️⃣', 'FROM / JOIN', 'Chọn bảng, nối bảng'],
            ['2️⃣', 'WHERE', 'Lọc từng dòng'],
            ['3️⃣', 'GROUP BY', 'Gom nhóm'],
            ['4️⃣', 'HAVING', 'Lọc nhóm (aggregate)'],
            ['5️⃣', 'SELECT', 'Chọn cột hiển thị'],
            ['6️⃣', 'DISTINCT', 'Loại trùng'],
            ['7️⃣', 'ORDER BY', 'Sắp xếp'],
            ['8️⃣', 'LIMIT / OFFSET', 'Giới hạn dòng'],
          ]
        },
        warning: 'WHERE chạy TRƯỚC SELECT → không thể dùng alias trong WHERE! VD: WHERE total > 5 ❌ → phải HAVING COUNT(*) > 5 ✅'
      },
      {
        title: '⚠️ LEFT JOIN + WHERE (BẪY) ⭐⭐',
        code: `-- ❌ SAI: WHERE lọc NULL → biến thành INNER JOIN!
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id
WHERE d.dept_name = 'IT';
-- Mất employee không có department!

-- ✅ ĐÚNG: Đưa điều kiện vào ON
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id AND d.dept_name = 'IT';
-- Giữ tất cả employee!`,
        codeLang: 'sql',
        answer: 'Điều kiện lọc bảng phải → đặt trong ON. Đặt trong WHERE sẽ mất NULL → biến thành INNER JOIN!'
      },
      {
        title: '📊 WHERE vs HAVING',
        table: {
          headers: ['', 'WHERE', 'HAVING'],
          rows: [
            ['Khi nào?', 'TRƯỚC GROUP BY', 'SAU GROUP BY'],
            ['Lọc gì?', 'Từng dòng', 'Nhóm (aggregate)'],
            ['Dùng với', 'Cột thường', 'COUNT, SUM, AVG...'],
          ]
        },
        code: `SELECT dept_id, COUNT(*) as total, AVG(salary) as avg_sal
FROM employees
WHERE status = 'ACTIVE'       -- Lọc TRƯỚC nhóm
GROUP BY dept_id
HAVING COUNT(*) > 2           -- Lọc SAU nhóm
ORDER BY avg_sal DESC;`,
        codeLang: 'sql',
        tip: 'Thứ tự thực thi: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT'
      },
      {
        title: '🏆 Window Function ⭐⭐',
        code: `SELECT name, salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
    RANK()       OVER (ORDER BY salary DESC) as rank_num,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_num
FROM employees;`,
        codeLang: 'sql',
        table: {
          headers: ['name', 'salary', 'ROW_NUMBER', 'RANK', 'DENSE_RANK'],
          rows: [
            ['A', '50000', '1', '1', '1'],
            ['B', '50000', '2', '1', '1'],
            ['C', '40000', '3', '3 ⚠️', '2 ✅'],
            ['D', '30000', '4', '4', '3'],
          ]
        },
        answer: 'ROW_NUMBER: luôn unique (1,2,3,4). RANK: cùng hạng CÓ gap (1,1,3). DENSE_RANK: cùng hạng KHÔNG gap (1,1,2).'
      },
      {
        title: '🔍 Index & Performance ⭐',
        content: 'Index = cấu trúc B-Tree giúp tìm kiếm nhanh. Giống như mục lục sách — không cần đọc từng trang.',
        table: {
          headers: ['✅ Nên đánh Index', '❌ Không nên'],
          rows: [
            ['Cột trong WHERE, JOIN, ON', 'Bảng rất nhỏ (< 1000 dòng)'],
            ['Cột ORDER BY, GROUP BY', 'Cột thường xuyên UPDATE/INSERT'],
            ['Cột có selectivity cao (nhiều giá trị khác nhau)', 'Cột có ít giá trị (VD: gender chỉ M/F)'],
          ]
        },
        code: `-- Tạo index
CREATE INDEX idx_email ON users(email);

-- Composite index (nhiều cột)
CREATE INDEX idx_dept_status ON employees(dept_id, status);

-- Xem execution plan
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'nam@fpt.com';
-- Nếu thấy "Seq Scan" → thiếu index!
-- Nên thấy "Index Scan" → đã dùng index ✅`,
        codeLang: 'sql',
        tip: 'Clustered Index: sắp xếp data thật (1 bảng chỉ 1 cái = PK). Non-clustered: cấu trúc riêng trỏ về data (nhiều cái).'
      },
      {
        title: '🔗 Subquery & CTE',
        code: `-- Subquery trong WHERE
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery trong FROM (Derived Table)
SELECT dept_name, avg_sal
FROM (
    SELECT dept_id, AVG(salary) as avg_sal
    FROM employees GROUP BY dept_id
) sub
JOIN departments d ON sub.dept_id = d.id;

-- CTE (Common Table Expression) — dễ đọc hơn
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) as avg_sal
    FROM employees GROUP BY dept_id
)
SELECT d.dept_name, da.avg_sal
FROM dept_avg da
JOIN departments d ON da.dept_id = d.id;`,
        codeLang: 'sql',
        tip: 'CTE dùng WITH ... AS — dễ đọc hơn subquery lồng nhau. Dùng EXISTS thay IN khi subquery lớn → nhanh hơn.'
      },
      {
        title: '🔒 Transaction & ACID ⭐⭐',
        content: `Transaction = một nhóm thao tác phải thành công HẾT hoặc thất bại HẾT.

ACID = 4 tính chất đảm bảo database tin cậy:`,
        table: {
          headers: ['Tính chất', 'Ý nghĩa', 'Ví dụ'],
          rows: [
            ['Atomicity', 'All or Nothing — tất cả hoặc không gì cả', 'Chuyển tiền: trừ A + cộng B. Nếu cộng B lỗi → hoàn tác trừ A'],
            ['Consistency', 'Data luôn hợp lệ trước/sau transaction', 'Tổng tiền trong hệ thống không đổi sau chuyển khoản'],
            ['Isolation', 'Các transaction không ảnh hưởng nhau', 'T1 đang sửa data → T2 không thấy data chưa commit'],
            ['Durability', 'Data persist sau khi COMMIT', 'Server crash sau COMMIT → data vẫn còn'],
          ]
        },
        code: `-- Ví dụ: Chuyển 1000đ từ tài khoản A sang B
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;  -- Trừ A
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;  -- Cộng B

-- Kiểm tra: nếu balance A < 0 → ROLLBACK
IF (SELECT balance FROM accounts WHERE id = 1) < 0 THEN
    ROLLBACK;  -- Hoàn tác TẤT CẢ!
ELSE
    COMMIT;    -- Lưu vĩnh viễn
END IF;`,
        codeLang: 'sql',
        warning: 'Không dùng transaction → có thể trừ tiền A nhưng chưa cộng B (server crash) → MẤT TIỀN!'
      },
      {
        title: '🔐 Isolation Levels (Mức cô lập)',
        content: `Isolation Level quyết định transaction này "thấy" data của transaction khác thế nào.`,
        table: {
          headers: ['Level', 'Dirty Read', 'Non-Repeatable', 'Phantom Read', 'Performance'],
          rows: [
            ['READ UNCOMMITTED', '✅ Có thể', '✅ Có thể', '✅ Có thể', 'Nhanh nhất'],
            ['READ COMMITTED', '❌ Không', '✅ Có thể', '✅ Có thể', 'Mặc định PostgreSQL'],
            ['REPEATABLE READ', '❌ Không', '❌ Không', '✅ Có thể', 'Mặc định MySQL InnoDB'],
            ['SERIALIZABLE', '❌ Không', '❌ Không', '❌ Không', 'Chậm nhất, an toàn nhất'],
          ]
        },
        code: `-- Dirty Read: Đọc data chưa COMMIT của transaction khác
-- T1: UPDATE salary = 5000 WHERE id = 1;  (chưa commit)
-- T2: SELECT salary WHERE id = 1;  → thấy 5000 (dirty!)
-- T1: ROLLBACK;  → salary quay về giá trị cũ → T2 đọc sai!

-- Non-Repeatable Read: Đọc 2 lần ra 2 kết quả khác nhau
-- T1: SELECT salary → 3000
-- T2: UPDATE salary = 5000; COMMIT;
-- T1: SELECT salary → 5000  (khác lần trước!)

-- Phantom Read: Đọc 2 lần, số dòng thay đổi
-- T1: SELECT COUNT(*) → 10 dòng
-- T2: INSERT 1 dòng mới; COMMIT;
-- T1: SELECT COUNT(*) → 11 dòng  (phantom!)`,
        codeLang: 'sql',
        tip: 'Thực tế: PostgreSQL mặc định READ COMMITTED. MySQL mặc định REPEATABLE READ. Đa số trường hợp là đủ.'
      },
      {
        title: '📐 Normalization (Chuẩn hóa)',
        table: {
          headers: ['Chuẩn', 'Quy tắc', 'Ví dụ vi phạm'],
          rows: [
            ['1NF', 'Mỗi ô chỉ 1 giá trị (atomic)', 'phone: "0901,0902" → tách thành 2 dòng'],
            ['2NF', '1NF + không partial dependency', 'Composite PK (student_id, course_id) → student_name phụ thuộc riêng student_id'],
            ['3NF', '2NF + không transitive dependency', 'employee → dept_id → dept_name. Tách dept_name ra bảng riêng'],
          ]
        },
        answer: 'Normalization giảm redundancy, tăng data integrity. Nhưng quá nhiều bảng → nhiều JOIN → chậm. Thực tế thường dùng đến 3NF.'
      },
      {
        title: '📝 Bài tập SQL thường gặp phỏng vấn',
        code: `-- 1. Tìm nhân viên lương cao thứ 2
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC LIMIT 1 OFFSET 1;
-- Hoặc dùng DENSE_RANK:
SELECT name, salary FROM (
    SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rk
    FROM employees
) sub WHERE rk = 2;

-- 2. Tìm department có nhiều nhân viên nhất
SELECT d.dept_name, COUNT(*) as total
FROM employees e
JOIN departments d ON e.dept_id = d.id
GROUP BY d.dept_name
ORDER BY total DESC LIMIT 1;

-- 3. Tìm nhân viên có lương cao hơn trung bình department của họ
SELECT e.name, e.salary, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.id
WHERE e.salary > (
    SELECT AVG(e2.salary) FROM employees e2
    WHERE e2.dept_id = e.dept_id
);`,
        codeLang: 'sql',
        tip: 'Các bài này HAY GẶP trong phỏng vấn FPT! Luyện viết tay trên giấy.'
      }
    ],
    qa: [
      { q: 'INNER JOIN vs LEFT JOIN?', a: 'INNER: chỉ dòng khớp cả 2 bảng. LEFT: tất cả bảng trái + khớp bảng phải (NULL nếu không khớp).' },
      { q: 'LEFT JOIN + WHERE bẫy gì?', a: 'WHERE lọc bảng phải → mất NULL → biến thành INNER JOIN. Đưa điều kiện vào ON để giữ NULL.' },
      { q: 'WHERE vs HAVING?', a: 'WHERE: lọc trước GROUP BY (từng dòng). HAVING: lọc sau GROUP BY (nhóm, aggregate).' },
      { q: 'ROW_NUMBER vs RANK vs DENSE_RANK?', a: 'ROW_NUMBER: unique (1,2,3). RANK: có gap (1,1,3). DENSE_RANK: không gap (1,1,2).' },
      { q: 'Index là gì?', a: 'Cấu trúc dữ liệu B-Tree giúp tìm kiếm nhanh. Nên dùng cho cột WHERE, JOIN, ORDER BY.' },
      { q: 'Clustered vs Non-clustered Index?', a: 'Clustered: sắp xếp dữ liệu thật sự (1 bảng chỉ 1 cái, thường là PK). Non-clustered: tạo cấu trúc riêng trỏ về data (nhiều cái).' },
      { q: 'Subquery vs JOIN?', a: 'Subquery: query lồng trong query, dễ đọc. JOIN: nối bảng, thường nhanh hơn. Dùng EXISTS thay IN khi subquery lớn.' },
      { q: 'UNION vs UNION ALL?', a: 'UNION: gộp kết quả + loại trùng (chậm). UNION ALL: gộp giữ hết (nhanh hơn).' },
      { q: 'Normalization là gì?', a: '1NF: atomic values. 2NF: no partial dependency. 3NF: no transitive dependency. Giảm redundancy, tăng data integrity.' },
      { q: 'Transaction ACID là gì?', a: 'Atomicity: all or nothing. Consistency: data hợp lệ. Isolation: transaction không ảnh hưởng nhau. Durability: data persist sau commit.' },
      { q: 'DELETE vs TRUNCATE vs DROP?', a: 'DELETE: xóa dòng, có WHERE, rollback được. TRUNCATE: xóa tất cả dòng, nhanh, không rollback. DROP: xóa cả bảng.' },
      { q: 'GROUP BY dùng khi nào?', a: 'Khi muốn gom nhóm dữ liệu để tính aggregate (COUNT, SUM, AVG, MAX, MIN). SELECT chỉ được cột GROUP BY hoặc aggregate.' },
      { q: 'Tìm nhân viên lương cao thứ 2?', a: 'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); hoặc dùng DENSE_RANK() = 2.' }
    ]
  },
  {
    id: 'data-structure',
    title: 'JVM & Data Structure',
    icon: '🧠',
    badge: 'Core',
    color: '#64748b',
    sections: [
      {
        title: '📐 Cấu trúc dữ liệu cơ bản',
        table: {
          headers: ['Cấu trúc', 'Đặc điểm', 'Ví dụ thực tế'],
          rows: [
            ['Array', 'Fixed size, O(1) access by index', 'Lưu danh sách điểm cố định'],
            ['ArrayList', 'Dynamic array, O(1) get, O(n) add đầu', 'Danh sách sản phẩm'],
            ['LinkedList', 'DSLK đôi, O(1) add đầu, O(n) get', 'Playlist nhạc, undo/redo'],
            ['Stack', 'LIFO (Last In First Out)', 'Call stack, undo, bracket matching'],
            ['Queue', 'FIFO (First In First Out)', 'Hàng đợi request, message queue'],
            ['HashMap', 'Key-Value, O(1) avg', 'Cache, counting, dictionary'],
            ['TreeMap', 'Key sorted, O(log n)', 'Leaderboard, sorted data'],
            ['HashSet', 'No duplicate, O(1)', 'Loại trùng, kiểm tra tồn tại'],
          ]
        }
      },
      {
        title: '💾 JVM Memory Model',
        content: 'JVM chia memory thành nhiều vùng, mỗi vùng có mục đích khác nhau:',
        table: {
          headers: ['Vùng', 'Chứa gì', 'Đặc điểm'],
          rows: [
            ['Stack', 'Biến local, reference, method call', 'Mỗi thread 1 stack. LIFO. Tự giải phóng khi method kết thúc'],
            ['Heap', 'Object, Array', 'Dùng chung tất cả thread. GC quản lý'],
            ['String Pool', 'String literal', 'Nằm trong Heap. Cache: "hello" == "hello" → true'],
            ['Method Area', 'Class info, static fields, constant pool', 'Shared cho tất cả thread'],
          ]
        },
        code: `int x = 10;                    // x nằm trong Stack
String s1 = "hello";           // s1 (ref) Stack, "hello" String Pool
String s2 = new String("hi");  // s2 (ref) Stack, object Heap
User user = new User();        // user (ref) Stack, User object Heap`,
        tip: 'Stack: nhỏ, nhanh, tự giải phóng. Heap: lớn, chậm hơn, cần GC dọn dẹp.'
      },
      {
        title: '♻️ Garbage Collection (GC)',
        content: `GC tự động dọn dẹp object không còn reference trong Heap.

Không cần gọi thủ công (khác C/C++). System.gc() chỉ GỢI Ý, không đảm bảo.`,
        table: {
          headers: ['GC Generation', 'Mô tả'],
          rows: [
            ['Young Gen (Eden + Survivor)', 'Object mới tạo. Minor GC — nhanh, thường xuyên'],
            ['Old Gen (Tenured)', 'Object sống lâu. Major GC — chậm hơn, ít hơn'],
            ['Metaspace (Java 8+)', 'Class metadata. Thay thế PermGen cũ'],
          ]
        },
        tip: 'Object không có reference → eligible for GC. Memory leak: giữ reference không cần thiết (static list, listener...).'
      },
      {
        title: '🔀 Thread & Concurrency (Cơ bản)',
        content: `Thread = luồng thực thi song song. Java hỗ trợ multi-threading native.`,
        code: `// Cách 1: extends Thread
class MyThread extends Thread {
    public void run() { System.out.println("Thread running"); }
}
new MyThread().start();

// Cách 2: implements Runnable (KHUYÊN DÙNG)
class MyTask implements Runnable {
    public void run() { System.out.println("Task running"); }
}
new Thread(new MyTask()).start();

// synchronized = chỉ 1 thread vào cùng lúc
public synchronized void withdraw(int amount) {
    if (balance >= amount) balance -= amount;
}`,
        warning: 'Không synchronized → race condition: 2 thread rút tiền cùng lúc → số dư sai!'
      },
      {
        title: '🔑 Design Patterns cơ bản',
        table: {
          headers: ['Pattern', 'Mô tả', 'Ví dụ thực tế'],
          rows: [
            ['Singleton', '1 instance duy nhất trong toàn app', 'Spring Bean (default scope), Database connection pool'],
            ['Factory', 'Tạo object mà không expose logic tạo', 'LoggerFactory.getLogger()'],
            ['Builder', 'Xây object phức tạp step-by-step', 'ResponseEntity.ok().header().body()'],
            ['Observer', 'Notify nhiều listener khi state thay đổi', 'Event handling, message queue'],
            ['Repository', 'Tách logic data access ra layer riêng', 'Spring Data JPA Repository'],
          ]
        },
        tip: 'Phỏng vấn FPT thường hỏi Singleton! Biết cách implement + tại sao Spring Bean mặc định là Singleton.'
      }
    ],
    qa: [
      { q: 'Stack vs Heap?', a: 'Stack: biến local, nhỏ, nhanh, mỗi thread 1 cái. Heap: object, lớn, GC quản lý, shared tất cả thread.' },
      { q: 'Garbage Collection hoạt động thế nào?', a: 'GC tự dọn object không còn reference. Young Gen → Minor GC (nhanh). Old Gen → Major GC (chậm). System.gc() chỉ gợi ý.' },
      { q: 'Memory leak trong Java?', a: 'Xảy ra khi giữ reference không cần thiết (static collection chứa object, không close stream). GC không dọn được → Heap đầy → OutOfMemoryError.' },
      { q: 'synchronized là gì?', a: 'Lock: chỉ 1 thread vào method/block cùng lúc. Tránh race condition khi nhiều thread sửa shared data.' },
      { q: 'Singleton pattern?', a: '1 instance duy nhất, global access. VD: private constructor + static getInstance(). Spring Bean default = singleton.' }
    ]
  },
  {
    id: 'quick-review',
    title: '10 Phút Cuối',
    icon: '⏱️',
    badge: 'Review',
    color: '#f59e0b',
    sections: [
      {
        title: '🔥 Quick Review — Đọc trước khi vào phòng!',
        content: `1. OOP = Encapsulation + Inheritance + Polymorphism + Abstraction

2. Spring Boot = Spring + Auto Config + Embedded Server + Starter

3. IoC = Container tạo object. DI = inject dependency. Constructor Injection best.

4. HashMap = hashCode() → bucket → equals() → entry. O(1).

5. LEFT JOIN + WHERE: ON = giữ NULL, WHERE = mất NULL!

6. Window Function:
   ROW_NUMBER = 1,2,3,4 (unique)
   RANK = 1,1,3,4 (có gap)
   DENSE_RANK = 1,1,2,3 (không gap)

7. Bean Lifecycle: Instantiate → DI → @PostConstruct → Ready → @PreDestroy

8. REST: GET(200) POST(201) PUT(200) DELETE(204). Stateless.

9. @ControllerAdvice + @ExceptionHandler = xử lý lỗi tập trung.

10. ACID = Atomicity + Consistency + Isolation + Durability.

11. Index = B-Tree. Dùng cho WHERE, JOIN, ORDER BY. EXPLAIN kiểm tra.

12. Why FPT = Training + Global projects + Career growth`,
        answer: '💪 Fresher chỉ cần nắm vững basic + thái độ tốt + sẵn sàng học = PASS!'
      },
      {
        title: '🎤 Script giới thiệu — English Version',
        content: `"Hello, my name is Nam. I recently graduated and I'm very passionate about backend development with Java and Spring Boot.

During my studies, I built a project called EchoVerse — a full-stack music platform. I was the main developer, handling both backend and frontend.

On the backend, I used Java 17 with Spring Boot 3, Spring Security with JWT authentication, and PostgreSQL as the database. For real-time features like messaging and notifications, I implemented WebSocket and Firebase Cloud Messaging.

On the frontend, I built the UI with React, making it responsive and user-friendly. One of the most interesting features was music recognition — users could find songs by humming or singing a melody.

I managed the project using Git for version control, documented APIs with Swagger, and tested with Postman. I followed a layered architecture pattern — Controller, Service, Repository — keeping the code clean and maintainable.

What I want is to grow as a professional Java developer at FPT Software. I'm excited about the opportunity to work on enterprise-scale projects, learn from experienced engineers, and build a long-term career here.

Thank you for your time."`,
        tip: 'Luyện nói 1.5-2 phút. Giọng tự tin, chậm rãi. Nắm chắc keyword: Spring Boot, PostgreSQL, WebSocket, JWT, React, layered architecture.',
        warning: 'ĐỪNG học thuộc lòng! Hiểu ý → diễn đạt tự nhiên. Họ sẽ hỏi sâu vào những gì bạn nói!'
      },
      {
        title: '🎤 Script giới thiệu BACKUP — Tiếng Việt (Dự phòng)',
        content: `"Xin chào anh/chị, em tên là Nam. Em vừa tốt nghiệp và em rất đam mê phát triển backend với Java và Spring Boot.

Trong quá trình học, em đã xây dựng một dự án tên là EchoVerse — nền tảng nghe nhạc và tương tác xã hội. Em là developer chính, phụ trách cả backend và frontend.

🔹 Backend: Em sử dụng Java 17 với Spring Boot 3, Spring Security kết hợp JWT để xác thực, và PostgreSQL làm database. Em thiết kế RESTful API theo kiến trúc 3 tầng: Controller → Service → Repository.

🔹 Real-time: Em implement WebSocket cho tính năng chat và Firebase Cloud Messaging cho push notification.

🔹 Frontend: Em dùng React để xây dựng giao diện responsive. Tính năng đặc biệt nhất là nhận diện bài hát — người dùng có thể tìm nhạc bằng cách ngâm giai điệu.

🔹 Tools: Em quản lý code bằng Git, viết API docs bằng Swagger, và test bằng Postman.

Em mong muốn được phát triển sự nghiệp Java developer tại FPT Software — nơi em có thể làm việc trên các dự án enterprise thực tế, học hỏi từ các anh chị có kinh nghiệm, và xây dựng career path lâu dài.

Cảm ơn anh/chị đã lắng nghe."`,
        tip: 'Bản tiếng Việt dùng khi phỏng vấn vòng kỹ thuật (Round 2/3). Vẫn giữ cấu trúc 3M!',
        warning: 'Nếu phỏng vấn tiếng Việt: vẫn nên xen kẽ thuật ngữ tiếng Anh (Spring Boot, JWT, REST API...) — cho thấy bạn quen với tech vocabulary.'
      }
    ]
  }
];
