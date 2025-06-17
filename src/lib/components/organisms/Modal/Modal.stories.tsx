import { Meta, StoryObj } from '@storybook/react-webpack5';

import { useRef } from 'react';

import { Modal } from './Modal';
import type { ModalRef } from './types';

const meta = {
  title: 'organisms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', width: '100%', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithControls = () => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <div>
      <button
        onClick={() => modalRef.current?.open()}
        style={{
          padding: '8px 16px',
          backgroundColor: '#1C45ED',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Open Modal
      </button>

      <Modal ref={modalRef} onClose={() => modalRef.current?.close()} selector="#storybook-root">
        <div style={{ padding: '24px', minWidth: '300px' }}>
          <h2 style={{ margin: '0 0 16px 0' }}>Modal Title</h2>
          <p style={{ margin: '0 0 24px 0' }}>
            This is an example modal content. The modal can be closed using the close button or by
            calling the close method on the ref.
          </p>
          <button
            onClick={() => modalRef.current?.close()}
            style={{
              padding: '8px 16px',
              backgroundColor: '#1C45ED',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalWithControls />,
};

export const WithLongContent: Story = {
  render: () => {
    const modalRef = useRef<ModalRef>(null);

    return (
      <div>
        <button
          onClick={() => modalRef.current?.open()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#1C45ED',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Open Modal with Long Content
        </button>

        <Modal ref={modalRef} onClose={() => modalRef.current?.close()} selector="#storybook-root">
          <div style={{ padding: '24px', minWidth: '300px', maxWidth: '500px' }}>
            <h2 style={{ margin: '0 0 16px 0' }}>Long Content Modal</h2>
            {Array.from({ length: 5 }).map((_, index) => (
              <p key={index} style={{ margin: '0 0 16px 0' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            ))}
            <button
              onClick={() => modalRef.current?.close()}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1C45ED',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close Modal
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const modalRef = useRef<ModalRef>(null);

    return (
      <div>
        <button
          onClick={() => modalRef.current?.open()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#1C45ED',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Open Custom Modal
        </button>

        <Modal ref={modalRef} onClose={() => modalRef.current?.close()} selector="#storybook-root">
          <div
            style={{
              padding: '32px',
              minWidth: '300px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ margin: '0 0 16px 0' }}>Custom Content</h2>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#1C45ED',
                margin: '0 auto 16px',
              }}
            />
            <p style={{ margin: '0 0 24px 0' }}>This modal demonstrates custom content styling</p>
            <button
              onClick={() => modalRef.current?.close()}
              style={{
                padding: '8px 16px',
                backgroundColor: '#1C45ED',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close Modal
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};
