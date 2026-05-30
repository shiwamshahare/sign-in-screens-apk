import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<'SignIn' | 'SignUp' | 'ForgotPassword'>('SignIn');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotMethod, setForgotMethod] = useState<'email' | '2fa' | 'google'>('2fa');

  const Logo = () => (
    <View style={styles.logoContainer}>
      <View style={[styles.logoRow, {}]}>
        <View style={[styles.logoDot, { height: 15, width: 11 }]} />
      </View>
      <View style={[styles.logoRow, { gap: 10 }]}>
        <View style={[styles.logoDot, { height: 11, width: 15 }]} />
        <View style={[styles.logoDot, { height: 11, width: 15 }]} />
      </View>
      <View style={[styles.logoRow, {}]}>
        <View style={[styles.logoDot, { height: 15, width: 11 }]} />
      </View>
    </View>
  );

  const renderSignIn = () => (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.welcome}>
        <Logo />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>
      </View>

      <View style={[styles.formContainer]}>
        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Email Address</Text>
          <View style={[styles.inputContainer, styles.inputContainerActive]}>
            <Ionicons name="mail-outline" size={20} color="#333" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              keyboardType="email-address"
              autoCapitalize="none"
              defaultValue="com.shahare@gmail.com"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Fontisto name="facebook" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-instagram" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => setCurrentScreen('SignUp')}>
              <Text style={styles.footerColorText}>Sign Up.</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setCurrentScreen('ForgotPassword')}>
            <Text style={styles.footerColorText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderSignUp = () => (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.welcome}>
        <Logo />
        <Text style={styles.title}>Sign Up For Free</Text>
        <Text style={styles.subtitle}>Sign up in 1 minute for free!</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email..."
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Password</Text>
          <View style={[styles.inputContainer, styles.inputContainerError]}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
              secureTextEntry={!showPassword}
              defaultValue="****************"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.labelText}>Password Confirmation</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
              secureTextEntry={!showConfirmPassword}
              defaultValue="****************"
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.errorBox}>
          <Ionicons name="warning" size={16} color="#FF3B30" />
          <Text style={styles.errorText}>ERROR: Password do not match!</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>

        <View style={[styles.footerContainer, { marginTop: 40 }]}>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => setCurrentScreen('SignIn')}>
              <Text style={styles.footerColorText}>Sign In.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const renderForgotPassword = () => (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <ScrollView contentContainerStyle={[styles.scrollContent, { justifyContent: 'flex-start' }]} showsVerticalScrollIndicator={false}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('SignIn')}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={[styles.welcomeLeft, { marginTop: 40 }]}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Select which methods you'd like to reset.</Text>
        </View>

        <View style={styles.formContainer}>
          <TouchableOpacity
            style={[styles.methodCard, forgotMethod === 'email' && styles.methodCardActive]}
            onPress={() => setForgotMethod('email')}
          >
            <View style={[styles.methodIconBox, forgotMethod === 'email' && styles.methodIconBoxActive]}>
              <Ionicons name="mail" size={20} color={forgotMethod === 'email' ? "#85CC17" : "#666"} />
            </View>
            <View style={styles.methodTexts}>
              <Text style={styles.methodTitle}>Email Address</Text>
              <Text style={styles.methodDesc}>Send via email address securely.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodCard, forgotMethod === '2fa' && styles.methodCardActive]}
            onPress={() => setForgotMethod('2fa')}
          >
            <View style={[styles.methodIconBox, forgotMethod === '2fa' && styles.methodIconBoxActive]}>
              <Ionicons name="phone-portrait" size={20} color={forgotMethod === '2fa' ? "#85CC17" : "#666"} />
            </View>
            <View style={styles.methodTexts}>
              <Text style={styles.methodTitle}>2 Factor Authentication</Text>
              <Text style={styles.methodDesc}>Send via 2FA securely.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.methodCard, forgotMethod === 'google' && styles.methodCardActive]}
            onPress={() => setForgotMethod('google')}
          >
            <View style={[styles.methodIconBox, forgotMethod === 'google' && styles.methodIconBoxActive]}>
              <Ionicons name="lock-closed" size={20} color={forgotMethod === 'google' ? "#85CC17" : "#666"} />
            </View>
            <View style={styles.methodTexts}>
              <Text style={styles.methodTitle}>Google Authenticator</Text>
              <Text style={styles.methodDesc}>Send via authenticator securely.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { marginTop: 30 }]}>
            <Text style={styles.buttonText}>Reset Password</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Background Lock Icon for Forgot Password Screen */}
      <View style={styles.bgLockContainer} pointerEvents="none">
        <Ionicons name="lock-closed" size={240} color="#E8E8E8" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'SignIn' && renderSignIn()}
      {currentScreen === 'SignUp' && renderSignUp()}
      {currentScreen === 'ForgotPassword' && renderForgotPassword()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F6F6F6",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoRow: {
    flexDirection: 'row',
  },
  logoDot: {

    borderRadius: 10,
    backgroundColor: '#85CC17',
    margin: -1,
  },
  welcome: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    paddingHorizontal: 24,
  },
  welcomeLeft: {
    alignItems: "flex-start",
    marginBottom: 30,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#222",
    marginBottom: 8,

  },
  subtitle: {
    fontSize: 14,
    color: "#777",
  },
  formContainer: {
    paddingHorizontal: 24,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  labelText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputContainerActive: {
    borderColor: '#85CC17',
  },
  inputContainerError: {
    borderColor: '#FF4D4D',
    backgroundColor: '#FFF5F5',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  button: {
    backgroundColor: "#85CC17",
    flexDirection: "row",
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFD6D6',
  },
  errorText: {
    color: '#FF4D4D',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
  },
  socialButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    gap: 16,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: '#fff',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  footerColorText: {
    fontSize: 14,
    color: "#85CC17",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  headerLeft: {
    paddingHorizontal: 24,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  methodCardActive: {
    borderColor: '#85CC17',
  },
  methodIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  methodIconBoxActive: {
    backgroundColor: '#F0F9E8',
  },
  methodTexts: {
    flex: 1,
  },
  methodTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  methodDesc: {
    fontSize: 13,
    color: '#888',
  },
  bgLockContainer: {
    position: 'absolute',
    bottom: -60,
    left: -40,
    zIndex: -1,
    opacity: 0.4,
  }
});
