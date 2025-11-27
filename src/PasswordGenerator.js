import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let newPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Пароль скопирован!');
  };

  return (
    <div className="password-generator">
      <h1>Генератор паролей</h1>
      
      <div className="controls">
        <label>
          Длина пароля:
          <input 
            type="number" 
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value) || 8)}
            min="4"
            max="32"
          />
        </label>
        
        <button onClick={generatePassword} className="generate-btn">
          Сгенерировать
        </button>
      </div>

      <div className="password-display">
        <input 
          type="text" 
          value={password}
          readOnly
          placeholder="Ваш пароль появится здесь"
          className="password-output"
        />
        {password && (
          <button onClick={copyToClipboard} className="copy-btn">
            Копировать
          </button>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;