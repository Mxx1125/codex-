'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { membershipSchema, type MembershipInput } from '@/lib/validation';
import { membership } from '@/data/content';
import styles from './MembershipForm.module.css';

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MembershipInput>({
    resolver: zodResolver(membershipSchema),
    defaultValues: { name: '', phone: '', city: '', email: '', consent: false },
  });

  // 原型阶段：只做前端校验，不发送、不保存任何个人信息。
  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.wrap} data-reveal>
      <h3 className={styles.title}>{membership.formTitle}</h3>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.field}>
          <label htmlFor="membership-name">
            姓名<span className={styles.required}>*</span>
          </label>
          <input
            id="membership-name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'membership-name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="membership-name-error" className={styles.error}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="membership-phone">
            手机号<span className={styles.required}>*</span>
          </label>
          <input
            id="membership-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-invalid={errors.phone ? 'true' : undefined}
            aria-describedby={errors.phone ? 'membership-phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="membership-phone-error" className={styles.error}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="membership-city">所在城市</label>
          <input
            id="membership-city"
            type="text"
            autoComplete="address-level2"
            {...register('city')}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="membership-email">邮箱</label>
          <input
            id="membership-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'membership-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="membership-email-error" className={styles.error}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.consent}>
          <input
            id="membership-consent"
            type="checkbox"
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errors.consent ? 'membership-consent-error' : undefined}
            {...register('consent')}
          />
          <label htmlFor="membership-consent">{membership.consent}</label>
        </div>
        {errors.consent && (
          <p id="membership-consent-error" className={styles.error}>
            {errors.consent.message}
          </p>
        )}

        <button type="submit" className={styles.submit}>
          加入会员
        </button>

        <div className={styles.status} aria-live="polite">
          {submitted && <p>{membership.demoNotice}</p>}
        </div>
      </form>
    </div>
  );
}
